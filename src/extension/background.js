import ReactDOM from 'react-dom'
import { render } from 'react-dom'
import messenger from './messenger'

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab)=>{
    //console.log('update', tabId, changeInfo, tab)
    
    if(changeInfo.status==='loading')
    {
        chrome.tabs.executeScript(tabId, {
            file: 'js/inject.bundle.js',
        })
    }
})

chrome.contextMenus.create({
    title: "Hug this text", 
    contexts:["selection"], 
    onclick: function(info, tab) {
        console.log(info)
        console.log(tab)
        hugContent(tab.id, formatSelectedText(info) )
    }
})

chrome.contextMenus.create({
    title: "Hug this image", 
    contexts:["image"], 
    onclick: function(info, tab) {
        console.log(info)
        console.log(tab)
  }
})


chrome.contextMenus.create({
    title: "Hug this link    ", 
    contexts:["link"], 
    onclick: function(info, tab) {
        console.log(info)
        console.log(tab)
  }
})

let hugContent=(tabId, content)=>
{
    let msg = messenger.createMessage('inputHug', content)
    messenger.sendToTab(tabId, msg)
}

let formatSelectedText=(info)=>
{
    return {
        text:info.selectionText,
        parents:[info.pageUrl]
    }
}

