import React from 'react'
import ReactDOM, { render } from 'react-dom'
import InputDock from './inputDock'
import retargetEvents from 'react-shadow-dom-retarget-events';

let inject = (id, component) => {

  let root = document.getElementById(id)
  if (root == null) {
    root = document.createElement('div')
    root.id = id
    document.body.appendChild(root)
  }

  let el = document.createElement('div');
  let shadowRoot = root.attachShadow({ mode: 'open' });
  shadowRoot.appendChild(el);

  const App = () => (
    <InputDock/>
  )

  render(<App />, el);
  retargetEvents(shadowRoot);
}

inject('arxiu')
