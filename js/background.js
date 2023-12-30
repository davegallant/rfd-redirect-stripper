import { updateRedirects, setDefaultConfig } from "../js/utils.js"

function setAlarm() {
  chrome.alarms.get('update-redirects', alarm => {
    if (!alarm) {
      chrome.alarms.create('update-redirects', { periodInMinutes: 1 });
    }
  });
}

chrome.alarms.onAlarm.addListener(() => {
  console.log("alarm fired");
  updateRedirects();
});

chrome.runtime.onInstalled.addListener(() => {
  setDefaultConfig();
  updateRedirects();
  setAlarm();
});

//Ensure alarm is created
chrome.runtime.onStartup.addListener(() => {
  setAlarm();
});