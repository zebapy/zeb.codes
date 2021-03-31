---
title: Migrating from mongodb to postgres using dbcrossbar, to serve via prisma
summary: My journey migrating away from 'new hotness' mongodb to tried and true postgresql.
---

On my personal project Fateseal, using Mongodb and its schemaless nature got me up and running early on. Its JS-like API was somewhat easier to pick up as well, as I had never touched SQL. Now that tools have evolved (my goal with the project is to use [Prisma](https://www.prisma.io/)) for serving the data, but unfortunately they don't have Mongodb support (yet).

Regardless, I don't want to stick with mongodb for a few reasons

- Fateseal's database content is _very_ relational. Users own decks. Decks have cards. Cards belong to sets, etc. I think mongodb was the wrong tool for the job, but I hadn't dug into databases much before, and it was somewhat more user friendly.
- I use Postgres at my day job and now using it on most side projects (mainly beacuse Prisma supports it).
- Postgres is tried and true, so I trust in something more established than mongo at this point.
- Postgres is cheaper to host than mongo on managed db services (though I'll likely try my own set up using a VPS)

With that rationale out of the way, I started to consider migration paths.

A typical approach would be to write custom JS scripts to query a thing from mongodb then insert it into postgres.

Some hurdles with this approach was

- I have to reference my weird old mongoosejs mongodb models to transport docs
- I have to make sure my schema is set up properly in postgres
- If a doc had some relations (`user.decks`), I'd need to handle creating the deck and associating the user at the same time

This was _somewhat_ eased by Prisma, because I could write out the new schema by hande and create the postgres tables at once.

This started to become tiring, prone to error (easy to overlook misnamed columns or miss one) and tedious. After getting a few migrations down, I set the project aside awhile. I wanted something better.

### Enter: dbcrossbar and mongodb csv export

Another approach to migrations I was aware of is attempting more wholesale transport of data from one db to another.

There are services dedicated to do this but I figured I could achieve it with a few small tools myself. Plus it's an interesting problemt to solve.

### Step 1: export mongodb docs

First I needed to _get my data_. Luckily [Mongodb compass](https://www.mongodb.com/products/compass) (and the mongo CLI. I typically just prefer GUIs so I don't have to remember CLI args) has a decent CSV export.

The nice thing about this export is if you have an object one layer deep in the doc, it will flatten the columns out

```
{
  username: "john smith",
  profile: {
    image: "url_to_image"
  }
}
```

becomes

```csv
username, profile.image
john smith, url_to_image
```

<!-- TOOD: show how to export with screenshots -->

### Transforming nested mongo docs to relational tables

Though I had all my docs, I need to handle the nested objects/relations. When your mongoose models are set up as

```js
const userSchema = new Schema({
  username: String;
  decks: [
    {
      type: Schema.ObjectId,
      ref: 'Deck'
    }
  ]
});
```

The csv export for that field comes out as

```csv
username,decks
john_smith,"[{""$oid"":""558bd46f67f77a0a00367587""},{""$oid"":""557b202e26b4910a00547eb9""},{""$oid"":""58c01dfe7643640011c5b136""},{""$oid"":""5c4b3a5534d15f0014285e36""}]"
```

So we have to write some scripts to do a few things

- read all the csv files and contents
- parse contents from csv into json
- loop through each row
- loop through each key of each row
- detect if there's a nested relation/object
- create a relation csv like `user_decks.csv` that points the userid to the deck id
  - also handle more meta info. `deck.cards` has `count: number, board: string`
- remove the field from the original doc (remove `decks` from `users`)

### Using dbcrossbar to create schemas and import data
