import React from 'react';
import { render } from 'react-dom';
import InputDock from './inputDock'

let inject=(id, component)=>
{
    const injectedDiv = document.createElement('div');
    //injectedDiv.className = 'inject-react-example';
    injectedDiv.className = id;
    injectedDiv.style.textAlign = 'center';
    document.body.appendChild(injectedDiv);
    render(component, injectedDiv);
}

inject('arxiu-new', <InputDock/>)
