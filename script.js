chrome.tabs.executeScript({file: 'jquery.js'}, function(){
    chrome.tabs.executeScript({file: 'inject.js'})
})
