function updateRedirects() {
  browser.storage.local.get("config", function (URL) {
    fetch(URL.config)
      .then((res) => res.json())
      .then((res) => {
        browser.storage.local
          .set({
            redirects: res,
          })
          .catch((error) => {
            console.log(error);
          });
      });
  });
}

function setDefaultConfig() {
  browser.storage.local.set({
    config:
      "https://raw.githubusercontent.com/davegallant/rfd-redirect-stripper/main/redirects.json",
  });
}
