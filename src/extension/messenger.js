let x = {}

x.listenToBackground=()=>
{
    chrome.runtime.onMessage.addListener((msg, sender, sendResponse)=>{
        console.log('Got message', msg )
        x.onMessage(msg)
        sendResponse()
    })
}

x.listenToTabs=()=>
{

}

x.onMessage=(msg)=>
{
    x.registry[msg.func](...msg.args)
}

x.registerFunction=(functionId, func)=>
{
    x.registry[functionId]=func
}

x.createMessage=(functionId, args)=>
{
    return {
        func:functionId,
        args:args
    }
}

x.processResponse=(response)=>
{
    console.log(response)
}

x.registry={}

x.sendToBackground=(message)=>
{
    chrome.runtime.sendMessage(message, function(response) {
        console.log(response);
    });
}

x.sendToTab=(tabId, message)=>
{
    chrome.tabs.sendMessage(tabId, message, x.processResponse)
}

module.exports = x