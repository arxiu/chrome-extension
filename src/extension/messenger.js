let x = {}

x.listenToBackground = () => {
    chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
        x.onMessage(msg)
        sendResponse()
    })
}

x.listenToTabs = () => {

}

x.onMessage = (msg) => {
    console.log('got', msg)
    x.registry[msg.func](msg.args)
}

x.registerFunction = (functionId, func) => {
    x.registry[functionId] = func
}

x.createMessage = (functionId, args) => {
    return {
        func: functionId,
        args: args
    }
}

x.processResponse = (response) => {
}

x.registry = {}

x.sendToBackground = (message) => {
    chrome.runtime.sendMessage(message, processResponse)
}

x.sendToTab = (tabId, message) => {
    console.log('sending', message)
    chrome.tabs.sendMessage(tabId, message, x.processResponse)
}

module.exports = x