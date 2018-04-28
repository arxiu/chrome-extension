import ReactDOM from 'react-dom'
import { render } from 'react-dom'
import messenger from './messenger'


let getVerb=()=>
{
    let verbs = ['Pin', 'Add', 'Hug', 'Absorb', 'Get', 'Link', 'Save', 'Store']
    let random = Math.floor(Math.random()*verbs.length)
    console.log(verbs[random])
    return verbs[random]
}

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
    title: getVerb()+" this text", 
    contexts:["selection"], 
    onclick: function(info, tab) {
        hugContent(tab.id, formatSelectedText(info) )
    }
})

chrome.contextMenus.create({
    title: getVerb()+" this image", 
    contexts:["image"], 
    onclick: function(info, tab) {
  }
})

chrome.contextMenus.create({
    title: getVerb()+" this link", 
    contexts:["link"], 
    onclick: function(info, tab) {
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

