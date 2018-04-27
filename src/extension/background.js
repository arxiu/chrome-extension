import ReactDOM from 'react-dom'
import { render } from 'react-dom'

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

let processResponse=(response)=>
{
    console.log(response)
}

let sendMessage=(tabId, message)=>
{
    chrome.tabs.sendMessage(tabId, message, processResponse)
}

let createMessage=(functionId, args)=>
{
    return {
        func:functionId,
        args:args
    }
}

let hugContent=(tabId, content)=>
{
    let msg = createMessage('inputHug', content)
    sendMessage(tabId, msg)
}

let formatSelectedText=(info)=>
{
    return {
        text:info.selectionText,
        parents:[info.pageUrl]
    }
}