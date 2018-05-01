import React, { Component } from 'react'
import { render } from 'react-dom'
import Dock from 'react-dock'
import { Styles } from './styles'
import messenger from './messenger'

import BasicInput from './ui/basicInput.js'

export default class Content extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isVisible: false,
            dockWidth: 320,
            inputValue:'hello'
        }
        messenger.listenToBackground()
        messenger.registerFunction('inputHug', this.inputHug)
    }


    render() {
        return (
            <div style={Styles.dock.body.content}>
                Add stuff here
                <BasicInput
                    value={this.state.inputValue}
                    onChange={this.onInputChange} />
            </div>
        )
    }
}


                              
