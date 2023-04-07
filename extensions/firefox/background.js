function updateRedirects() {
  var URL =
    "https://raw.githubusercontent.com/davegallant/rfd-redirect-stripper/main/redirects.json";

  fetch(URL)
    .then((res) => res.json())
    .then((res) => {
      browser.storage.local.set({
        "rfd-redirects": res,
      });
    });
}

chrome.runtime.onInstalled.addListener(() => {
  updateRedirects();
});

setInterval(updateRedirects, 1 * 60 * 60 * 1000);
