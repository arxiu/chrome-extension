import React from 'react'
import { render } from 'react-dom'
import InputDock from './inputDock'
import {Styles} from './styles'
import arxiuCSS from './arxiu.css';

let resetStyle = '#arxiu div {\n'
resetStyle+= 'background-color: "transparent";\n'
resetStyle+= 'padding:0;\n'
resetStyle+= 'margin:0;\n'
resetStyle+= 'border-radius:0;\n'
resetStyle+= 'width:100%;\n'
resetStyle+= 'height:auto;\n'
resetStyle+= '}'

let inject=(id, component)=>
{
    const injectedCSS = document.createElement('style')
    injectedCSS.type = 'text/css'
    injectedCSS.rel = 'stylesheet'
    let style = resetStyle
    injectedCSS.appendChild(document.createTextNode(style))
    document.head.appendChild(injectedCSS)
    

    const injectedDiv = document.createElement('div')
    injectedDiv.id = id;
    document.body.appendChild(injectedDiv);
    render(component, injectedDiv);
}

inject('arxiu', <InputDock/>)
