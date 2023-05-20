var contextMenuItem = {
    "id": "ytSelected",
    "title": "Open with Invidious",
    "contexts": ["link"]
};

var contextMenuItem2 = {
    "id": "ytPage",
    "title": "Open with Invidious",
    "contexts": ["page"]
}

chrome.contextMenus.create(contextMenuItem);
chrome.contextMenus.create(contextMenuItem2);

chrome.contextMenus.onClicked.addListener(function(clickData){
    if (clickData.menuItemId == "ytSelected" && clickData.linkUrl) {
        chrome.storage.sync.get(
            { instanceInvidious: 'instanceInvidious' },
            (items) => {
                var instanceInvidious = items.instanceInvidious;
                var url = new URL(clickData.linkUrl);
                var v = url.searchParams.get("v");
                var newURL = "https://" + instanceInvidious + "/" + "watch?v=" + v;
                chrome.tabs.create({ url: newURL });
            }
        );
    }
});

chrome.contextMenus.onClicked.addListener(function(clickData){
    if (clickData.menuItemId == "ytPage") {
        chrome.storage.sync.get(
            { instanceInvidious: 'instanceInvidious' },
            (items) => {
                var instanceInvidious = items.instanceInvidious;
                var url = new URL(clickData.pageUrl);
                var v = url.searchParams.get("v");
                var newURL = "https://" + instanceInvidious + "/" + "watch?v=" + v;
                chrome.tabs.create({ url: newURL });
            }
        );
    }
});

chrome.runtime.onInstalled.addListener(function() {
    chrome.runtime.openOptionsPage();
});