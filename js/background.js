import { updateRedirects, setDefaultConfig } from "../js/utils.js"

chrome.alarms.onAlarm.addListener(updateRedirects());
chrome.runtime.onInstalled.addListener(() => {
  updateRedirects();
  setDefaultConfig();
  chrome.alarms.create('update-redirects', { delayInMinutes: 60 });
});