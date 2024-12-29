---
title: Drippi
url: https://drippi.gg
logo: x
start_date: 2023
end_date: 2024
---

Drippi was a project I started with a friend who was an avid SSBM character skin creator (they had a skin used by one of the top SSBM slippi players - FIXME link to video and skin) and SSBM player via Slippi. We started it over 2023 christmas break when I was itching for a code project. I led design and development while they handled marketing/community management/roadmap. I completed most of the MVP in a week, and then we spent the next few months polishing it up.

Its purpose is to upload Super Smash Bros Melee character mods so users can easily download and install them for use when playing on slippi. We wanted to make it easier for users to find and download mods, and for creators to share their mods with the community.

### Domain

We acquired drippi.gg which was a perfect alignment because `gg` gaming term meaning "good game" and `drippi` is a slang term for "style" or "swag" in the context of fashion, music, and art. Combined with `slippi` which is a popular Melee netplay client, it's a play on words.

_Note: I shut down the project so the domain should no longer be live, unless someone else has taken it over_

### Features

The site was heavily inspired by ssbmtextures.com, but with a few key enhancements:

- 3D mod viewer
- Better mod search and filtering
- download count tracking for mod creators
- upvotes and comments
- modern design
- Reporting/moderation

Though we had many community members join and contribute skins, I ended up shutting down the project

I shut down the project due to not having enough time to maintain it, we were not getting any funding from our patreon to pay for hosting fees. Sometimes I am tempted to bring it back, so I keep the codebase around.

## Tech lessons learned

Below are some of the key tech lessons I learned from building Drippi, since I had not built a project like this before.

### File uploads

I finally implemented end to end file uploading process using digitalocean spaces, something of which I had not had a project for.

Soon after I saw that Theo was trying to tackle this issue (simple file upload tooling/service is lacking, similar to how resend.com is solving emails for devs) with https://uploadthing.com/, which I would've used if it was around when I was building Drippi.

I had a lot of concerns with user provided file uploads, since people could distribute malicious content, but there was only so much responsibility we could own. For some naive protections, I used zip file content checking to ensure filetypes within were as expected, and restricted filetypes to only those needed for SSBM mods.

### 3D mod viewer

TODO

### Unique download counts

We wanted unique download counts tracked for each mods. I could've restricted downloads to users that are logged in, and that would have made tracking download counts easier because 1 unique user = 1 unique download. but we wanted unauthorized users to be able to download mods too. I ended up using device fingerprinting to track unique downloads using fingerprintjs. I've read that fingerprinting is questionable regarding privacy but we don't do anything further with the fingerprint other than track unique downloads, so I think it's fine. We declared this in our privacy policy.

## Moderation

As with any user generated content site, I wanted to be sure we had means of removing harmful content. To solve this, I implemented a simple moderation system where users could report mods and mods could be taken down by admins.

Users could report a user or mod via modal, which would ask for some details. We then stored this in a `reports` table in the database, and pinged our discord server with a webhook when a report was made. I then added `flagged` boolean columns to mods and user tables, which would prevent emitting these mods/users from the API.

## Tech stack

- Nextjs/React for frontend
- TRPC for API in Nextjs
- Tailwindcss for styling
- next authjs for authentication with Discord login
- Postgres database on render.com
- File upload on digitalocean spaces

## Related links

- Announcement reddit post another friend made, which I didn't expect https://www.reddit.com/r/SSBM/comments/105wfah/drippigg_my_friend_just_launched_this_cool_new/
- Discord server: FIXME
- Codebase on GitHub:
- Patreon page: FIXME
- X: FIXME
