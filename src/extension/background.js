import ReactDOM from 'react-dom'
import { render } from 'react-dom'


chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab)=>{
    console.log('update', tabId, changeInfo, tab)
    
    if(changeInfo.status==='loading')
    {
        chrome.tabs.insertCSS(tabId, {
            //code: '#arxiu{background-color: #f00 !important;}'
            file: 'css/arxiu.css'
        })

        chrome.tabs.executeScript(tabId, {
            file: 'js/inject.bundle.js',
        })
    }
    
})

chrome.contextMenus.create({
    title: "Pin text", 
    contexts:["selection"], 
    onclick: function(info, tab) {
        console.log(info)
        console.log(tab)
  }
})

