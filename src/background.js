chrome.browserAction.onClicked.addListener(function(tab) {
    let element = document.createElement('textarea');
    document.body.appendChild(element);
    element.value = tab.url;



    chrome.tabs.create({ 'url': 'https://ytmp3.cc/en13/' }, function(tab) {
        chrome.tabs.executeScript(null, { code: "let a = document.getElementById('input'); a.value = tab.url;" })
    })


})

/*
chrome.tabs.create({ 'url': 'https://ytmp3.cc/en13/' }, function(tab) {
    chrome.tabs.executeScript(null, { code: "let a = document.getElementById('input'); a.focus(); document.execCommand('paste'); document.getElementById('submit').click();" })
})
*/