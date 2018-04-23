import React from 'react';
import { render } from 'react-dom';
import InputDock from './inputDock'

const killInheritStyles = {
    margin:'0px',
    padding:'0px',
    borderRadius:'0px',
    backgroundColor:'blue',
    width:'initial'
  }


let replaceStyle = (domStyle, newStyle)=>
{
    Object.keys(newStyle).forEach(function(prop) {
        console.log(prop, newStyle[prop])
       domStyle.setProperty(prop, newStyle[prop], 'important')
    });
}


let inject=(id, component)=>
{
    console.log('injeting')
    const injectedDiv = document.createElement('div');
    //injectedDiv.className = 'inject-react-example';
    injectedDiv.className = id;
    //Object.assign(injectedDiv.style, killInheritStyles)
    //injectedDiv.style.setProperty('borderRadius','0px', 'important')
    //injectedDiv.style.setProperty('backroundColor','blue', 'important')

    replaceStyle(injectedDiv.style, killInheritStyles)
    document.body.appendChild(injectedDiv);
    render(component, injectedDiv);
}

inject('arxiu-new', <InputDock/>)
