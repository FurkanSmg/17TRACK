chrome.contextMenus.create({

	id: "Track this number",
	title: "Track this number",
	contexts:["selection"],

});

chrome.contextMenus.onClicked.addListener(function myFunction(selectedText) {
    var a = chrome.windows.create({url: "https://www.17track.net/en/track?nums="+selectedText.selectionText+"&fc=0"});
});