import React from 'react'
import ReactDOM, { render } from 'react-dom'
import InputDock from './inputDock'

let inject = (id, component) => {

  let root = document.getElementById(id)
  if (root == null) {
    root = document.createElement('div')
    root.id = id
    document.body.appendChild(root)
  }

  let el = document.createElement('div');
  root.attachShadow({ mode: 'open' });
  root.shadowRoot.appendChild(el);

  const App = () => (
    <InputDock/>
  )

  render(<App />, el);
}

inject('arxiu')
