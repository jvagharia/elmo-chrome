chrome.browserAction.onClicked.addListener(function(tab) {
    let url = chrome.runtime.getURL('elmo.mp3')
	console.log(url)
	let a = new Audio(url)
	a.play()
});