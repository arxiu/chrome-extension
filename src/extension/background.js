/*const bluebird = require('bluebird');

global.Promise = bluebird;

function promisifier(method) {
  // return a function
  return function promisified(...args) {
    // which returns a promise
    return new Promise((resolve) => {
      args.push(resolve);
      method.apply(this, args);
    });
  };
}

function promisifyAll(obj, list) {
  list.forEach(api => bluebird.promisifyAll(obj[api], { promisifier }));
}

// let chrome extension api support Promise
promisifyAll(chrome, [
  'tabs',
  'windows',
  'browserAction',
  'contextMenus'
]);
promisifyAll(chrome.storage, [
  'local',
]);

require('./background/contextMenus');
require('./background/inject');
require('./background/badge');
*/

import InputDock from './inputDock'
import ReactDOM from 'react-dom';
import { render } from 'react-dom';


let inject=(id)=>
{
 /* var div = document.createElement('div');
  div.setAttribute("id", id);
  div.style.position = 'fixed';
  div.style.top = 0;
  div.style.right = 0;
  div.textContent = 'Injected!';
  document.body.appendChild(div);

  
  //alert('inserted self... giggity');
  ReactDOM.render(div, document.getElementById(id));
*/


  const injectDOM = document.createElement('div');
  //injectDOM.className = 'inject-react-example';
  injectDOM.className = id;
  injectDOM.style.textAlign = 'center';
  document.body.appendChild(injectDOM);
  try{

    render(<div />, injectDOM);
  }
  catch(e)
  {
    console.log(e)
  }

}

chrome.contextMenus.create({
  title: "Pin text", 
  contexts:["selection"], 
  onclick: function(info, tab) {
      console.log(info)
      console.log(tab)

      
  }
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab)=>{
  console.log('update', tabId, changeInfo, tab)

    if(changeInfo.status)
      if(changeInfo.status==='loading')
        chrome.tabs.executeScript(tabId, {
            file: 'js/inject.bundle.js'
        });

})

/*window.addEventListener('load', ()=>{
    
})*/




