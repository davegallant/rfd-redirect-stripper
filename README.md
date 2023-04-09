# rfd-redirect-stripper

rfd-redirect-stripper strips affiliate redirects from deal links posted on https://forums.redflagdeals.com.

## Why?

This helps navigate around broken links when using certain adblockers.

## Tampermonkey Script

This was originally a [Tampermonkey](https://www.tampermonkey.net/) userscript before evolving into a browser extension.

Copy [script.js](./script.js) into Tampermonkey.

## Browser Extensions

The browser extensions is currently not packaged or published anywhere.

### Firefox

To load the firefox extension, clone this repo and load the root dir.

Go to `about:addons`, and ensure that all permissions are granted. If this is not done, the extension will not have permission to execute content scripts.

### Building the extension

To build the extension, run:

```sh
npm install
npm run build
```

## Updating redirects

The browser extension will update the list of redirects by periodically fetching the latest [redirects.json](redirects.json).

Open a pull request to this repo to update the redirects.

An easy way to test regex: [regex101.com](https://regex101.com/).

New config can be tested by pointing the config url of the extension to your own branch.

![image](https://user-images.githubusercontent.com/4519234/230703252-a7e09cf6-d0e5-4f54-8973-3b93d4a4a5a2.png)

For example:

```text
https://raw.githubusercontent.com/davegallant/rfd-redirect-stripper/my-new-branch/redirects.json
```
