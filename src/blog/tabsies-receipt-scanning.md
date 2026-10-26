---
title: Tabsies, and teaching a phone to read a crumpled receipt
description: A receipt splitter that reads the receipt on your phone, and how a pile of fake receipts took it from 40% to 69% of scans adding up.
date: 2026-10-26
tags:
  - blog
---

<img src="/img/blog/tabsies/icon.png" alt="Tabsies mascot, an orange cat" class="post-icon" />

# Tabsies, and teaching a phone to read a crumpled receipt

Every time my usual crew orders food, someone ends up doing math in the group chat. Who had the milkshake? Do we split the delivery fee evenly? Venmo's own split only does even shares, and the split apps all want everyone to download something and sign up.

So I built [Tabsies](https://github.com/zebapy/tabsies). You drop in a receipt, send one link to the group, and everyone taps what they ordered and pays you on Venmo, Cash App or PayPal.

<div class="screens">
  <img src="/img/blog/tabsies/home.png" alt="Tabsies home screen with a drop zone for a receipt screenshot and an example of what friends see" />
  <img src="/img/blog/tabsies/pay.png" alt="Friend view: one item tapped, a share of tax, delivery fee and tip, and a Pay $16.53 on Venmo button" />
</div>

## How it works

1. **Drop in a receipt.** A DoorDash screenshot, an email receipt, or a photo of a paper slip. You can also paste it, take a photo, or type it in.
2. **Check what it found.** The items and fees come back as editable rows, with a check against the total printed on the receipt.
3. **Send the link.** Friends tap their items and see their food, their share of tax, fees and tip, and a pay button with the amount already filled in.

Tax, fees and tip are split by how much food each person ordered. If you had 51% of the food, you pay 51% of the tip.

<div class="screens">
  <img src="/img/blog/tabsies/loading.png" alt="Loading screen: Reading your receipt. It's read on your phone, so nothing gets uploaded." />
  <img src="/img/blog/tabsies/check.png" alt="Check your receipt screen with three items, tax and tip, matching the receipt total of $35.05, and a Copy link button" />
</div>

There's no server and no database. The whole order lives in the link itself (`#o=…`), so there's nothing to sign up for and nothing stored anywhere. The receipt is read on your phone with [tesseract.js](https://tesseract.projectnaptha.com/), a text reader that runs in the browser. No image gets uploaded, and there's no AI API call behind it. It's a static site, installable as an app, and on Android it shows up in the share sheet so you can share a screenshot straight into it.

That privacy choice has a cost: a browser text reader is much worse than a cloud model at reading a bad photo. Which brings me to the fun part.

## Measuring the reading

"It reads receipts pretty well" isn't something you can improve. I needed a number.

Real receipts are slow to collect and annoying to label, so I made fake ones. A script draws receipts in six styles: three delivery app screenshots (light and dark mode), an email receipt, and two paper slips. Then it makes worse copies of each one under 16 conditions: blur, low resolution, heavy JPEG, noise, rotation, perspective tilt, a shadow across the paper, crumples, smudges, faded ink, motion blur, and a "phone photo" that stacks most of those at once.

![A grid of fake receipts: clean screenshots and paper slips on top, then tilted, shadowed, crumpled and grainy copies on a wooden table](/img/blog/tabsies/test-receipts.jpg)

Every copy runs through the app's real reading code in headless Chromium, and the result is compared with what's actually on the receipt. Four scores per scan:

- **Item prices right**: every item price matches.
- **Fees right**: tax, fees and tip all match.
- **Adds up**: items plus fees equal the receipt total.
- **Perfect**: all of the above, names included.

48 receipts across 16 conditions came to 720 scans. The first run was humbling: 71% of item prices right, and only **40%** of scans added up to the total.

## What was going wrong

Two kinds of mistakes, and they needed different fixes.

**The parser misunderstood the text.** Even on perfectly clean receipts, only 83% added up. Lines like "Amount Due", "Balance Due" and "Grand Total" weren't recognized as the total, so they became items and the bill got counted twice. "Taxes" wasn't a fee. "Sub-Total" with a hyphen wasn't the subtotal. Paper slips that start each line with a quantity ("2 Fries 13.18") were one item instead of two.

The reader also makes predictable slips: "Ix" for "1x", "Tota)" for "Total", "S5.25" for "$5.25", "$6 95" or "$12. 95" for a price, and "Tax" on one line with "$4.27" on the next. Each got a small rule, and a card payment line now ends the receipt so it can't be read as an item.

**The image was too messy to read.** Shadows were the worst: only 32% of prices were right with a shadow across the paper. So before reading, the app now cleans up the image:

- **Evens out the lighting** by dividing each pixel by how bright the paper around it is. A shadow or a dim corner ends up looking like the rest of the receipt.
- **Stretches faded ink** toward black, gently on grainy photos so the grain doesn't turn into specks.
- **Finds the receipt** by growing outward from the brightest paper, and blanks out the table around it.
- **Flips dark mode** screenshots so text is always dark on light.
- **Straightens it** when the text leans more than 0.8°.

## Results

Same 720 scans, before and after:

| Condition | Prices right | Adds up |
|---|---|---|
| Clean screenshot | 100% → 100% | 83% → **100%** |
| Rotated 10° | 52% → **100%** | 4% → **100%** |
| Shadow | 32% → **97%** | 21% → **81%** |
| Heavy blur | 77% → **94%** | 10% → **69%** |
| Crumpled | 91% → **95%** | 58% → **75%** |
| Faint ink | 0% → **62%** | 0% → 4% |
| Phone photo | 17% → **41%** | 0% → 4% |
| **All 720 scans** | 71% → **86%** | 40% → **69%** |

Scans also got a bit faster, from 4.2 to 3.6 seconds on average, because a cleaned-up image is easier for the reader.

Screenshots and email receipts, which is how most delivery orders arrive, now come through right nearly every time. The table mostly shows how bad photos still trip it up.

## A real receipt

Fake receipts only get you so far. Then I tried a real one: a grocery deli slip, photographed in sunlight while held in a hand, with two tax lines, a "TOTAL TAX", and "BALANCE DUE" at the bottom. The first try got 4 of 8 prices and decided the $2.78 "TOTAL TAX" was the whole bill.

Fixing it took a few more rules. "TOTAL TAX" isn't the total when the tax lines above it already add up to it. "8 49 A" is $8.49 with the decimal read as a space and a tax flag after it. Tax flags and stray marks from the edge of the photo get trimmed from names. One price was just unreadable, so when exactly one price is missing and the total is known, it gets whatever's left, and the app tells you it did that. Now it gets all 8 and adds up to $44.93.

That photo and its correct answer now live in the repo, and every real receipt I collect from here on joins it.

## Keeping it honest

The last piece was making sure none of this quietly gets worse. Two checks run on GitHub on every change to the reading code:

- **Parser tests** that run in plain Node in a second, including the text of the real receipts.
- **A scan benchmark**: 12 fake receipts under all 16 conditions plus the real photos, about four minutes, compared against saved numbers. If a change makes reading worse, the check fails.

The saved numbers come from GitHub's machines rather than my laptop, since font rendering differs a little between them.

## What's still hard

- **Real phone photos (41% of prices).** Perspective is the big one. Straightening fixes rotation, but lines still slope differently at the top and bottom of a tilted receipt. The next step is finding the four corners and flattening it.
- **Motion blur (49%).** Digits smear together, and "$13.95" becomes "$1355". There's no good fix short of a sharper photo, so the app should suggest a retake.
- **Faint ink.** Faded patches just disappear.

Most of the results that are still wrong don't add up to the receipt total, which is a useful signal. Showing "Items and fees come to $X but the receipt says $Y" right away is a cheap way to catch them.

The code is on [GitHub](https://github.com/zebapy/tabsies). Next time you're stuck doing tip math for the group, give it a try.
