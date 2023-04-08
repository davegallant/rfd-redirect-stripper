const inputField = document.getElementById("input-field");
const saveButton = document.getElementById("save-button");
const resetButton = document.getElementById("reset-button");

const defaultConfig =
  "https://raw.githubusercontent.com/davegallant/rfd-redirect-stripper/main/redirects.json";

browser.storage.local.get("config").then((result) => {
  const value = result.config;
  if (value) {
    inputField.value = value;
  }
});

saveButton.addEventListener("click", () => {
  const value = inputField.value;
  browser.storage.local.set({ config: value });
  updateRedirects();
});

resetButton.addEventListener("click", () => {
  setDefaultConfig();
  inputField.value = defaultConfig;
  updateRedirects();
});
