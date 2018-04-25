import React from 'react'
import { render } from 'react-dom'
import InputDock from './inputDock'
import {Styles} from './styles'

let replaceStyle = (domStyle, newStyle)=>
{
    Object.keys(newStyle).forEach(function(prop) {
        console.log(prop, newStyle[prop])
       domStyle.setProperty(prop, newStyle[prop], 'important')
    });
}

let inject=(id, component)=>
{
    const injectedDiv = document.createElement('div')
    //injectedDiv.className = 'inject-react-example';
    injectedDiv.className = id;
    injectedDiv.id = id;
    //replaceStyle(injectedDiv.style, Styles.killInheritStyles)
    document.body.appendChild(injectedDiv);
    render(component, injectedDiv);
}

inject('arxiu', <InputDock/>)
