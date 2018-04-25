import React, { Component } from 'react'
import { render } from 'react-dom'
import Dock from 'react-dock'
import {Styles} from './styles'

export default class InputDock extends Component {
  constructor(props) {
    super(props)
    this.state = { isVisible: false }
  }

  buttonOnClick = () => {
    this.setState({ isVisible: !this.state.isVisible })
  }

  render() {
    return (
      <div>

        <Dock
          position="right"
          //size = "100px"
          dimMode="none"
          //defaultSize='100px'
          isVisible={true}
          dockStyle={Styles.dock}
        >
          <div>
            Add stuff here
          </div>
          
        </Dock>
      </div>
    )
  }
}