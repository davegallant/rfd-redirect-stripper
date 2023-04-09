chrome.runtime.onInstalled.addListener(() => {
  updateRedirects();
  setDefaultConfig();
});

setInterval(updateRedirects, 1 * 60 * 60 * 1000);
