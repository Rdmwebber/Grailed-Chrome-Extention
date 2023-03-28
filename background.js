console.log("backround is rippppiinn");

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (
    changeInfo.status === "complete" &&
    tab.url.includes("https://www.grailed.com/sell/new")
  ) {
    chrome.tabs.sendMessage(tabId, {
      type: "loadComplete",
    });
  }
});
