# aef-data

## What is what
- `/data` contains all data from the mongo database we used during Eco_Hack 2016.
  - Except...
    - data is in JSON so it’s easier to manipulate with JavaScript
    - data is paged into 4 pages - `entries-1.json` through `entries-4.json`
  - `entries-sample.json` is for fun and experiments
    - contains first 16 entries from `entries-1.json`
- `/main.js` is the main entry point
- `/config` contains credentials for Firebase access
  - `firebase.sample.js` is a fake config
  - Real config is kept private

## How to run
1. Create real `/config/firebase.js`
2. `$ npm i`
3. `$ npm run dev`
