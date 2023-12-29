import { updateRedirects, setDefaultConfig } from "../js/utils.js"

chrome.alarms.get('update-redirects', alarm => {
  if (!alarm)
    chrome.alarms.create('update-redirects', { delayInMinutes: 60 });
});
chrome.alarms.onAlarm.addListener(() => {
  updateRedirects();
});

chrome.runtime.onInstalled.addListener(() => {
  setDefaultConfig();
  updateRedirects();
});