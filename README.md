# rfd-redirect-stripper

rfd-redirect-stripper strips affiliate redirects from deal links posted on https://forums.redflagdeals.com.

## Why?

This helps prevent broken links from collisions with adblockers. Only use if you are experiencing difficulties opening links. Affiliate links and referrals help support RedFlagDeals.com.

## Tampermonkey Script

This was originally a [Tampermonkey](https://www.tampermonkey.net/) userscript before evolving into a browser extension.

Copy [script.js](./script.js) into Tampermonkey.

## Browser Extensions

The browser extensions are currently not packaged or published anywhere.

### Chrome

To load the chrome extension, clone this repo and load [extensions/chrome](./extensions/chrome/).

### Firefox

To load the firefox extension, clone this repo and load [extensions/firefox](./extensions/firefox/).

Go to `about:addons`, and ensure that all permissions are granted. If this is not done, the extension will not have permission to execute content scripts.

## Updating redirects

The browser extensions will update the list of redirects by periodically fetching the latest [redirects.json](redirects.json).

Open a pull request to this repo to update the redirects.

An easy way to test regex: [regex101.com](https://regex101.com/).

New config can be tested by pointing the config url of the extension to your own branch.

![image](https://user-images.githubusercontent.com/4519234/230703252-a7e09cf6-d0e5-4f54-8973-3b93d4a4a5a2.png)

For example:

```
https://raw.githubusercontent.com/davegallant/rfd-redirect-stripper/my-new-branch/redirects.json
```
