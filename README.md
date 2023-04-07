# rfd-redirect-stripper

rfd-redirect-stripper strips affiliate redirects from deal links posted on https://forums.redflagdeals.com.

## Why?

This helps prevent broken links from collisions with adblockers. Only use if you are experiencing difficulties opening links. Affiliate links and referrals help support RedFlagDeals.com.

## Tampermonkey Script

This was originally a [Tampermonkey](https://www.tampermonkey.net/) userscript before evolving into a browser extension.

Copy [script.js](./script.js) into Tampermonkey.

## Chrome extension

To load the browser extension, clone this repo and load [extensions/chrome](./extensions/chrome/).

## Updating redirects

The chrome extension will update itself by periodically fetching the latest [redirects.json](redirects.json).

Open a pull request to this repo to update the redirects.
