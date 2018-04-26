import React, { Component } from 'react'
import { render } from 'react-dom'
import Dock from 'react-dock'
import {Styles} from './styles'

export default class InputDock extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isVisible: true,
      dockWidth:200
    }
  }

  buttonOnClick = () => {
    this.setState({ isVisible: !this.state.isVisible })
  }

  onResize=(value)=>
  {
      this.setState({dockWidth:value})
  }

  render() {
    return (
      <div>

        <Dock
            position="right"
            fluid={false}
            size = {this.state.dockWidth}
            dimMode="none"
            isVisible={this.state.isVisible}
            dockStyle={Styles.dock}
            onSizeChange={this.onResize}>
            
            <div style = {Styles.dock.body}>
                    <div  style ={Styles.dock.body.content}>
                      Add stuff here    
                    </div>

                    <div  style ={Styles.dock.body.content}>
                      And here    
                    </div>
            </div>

        </Dock>
      </div>
    )
  }
}