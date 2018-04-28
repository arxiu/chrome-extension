import React, { Component } from 'react'
import { render } from 'react-dom'
import Dock from 'react-dock'
import { Styles } from './styles'
import messenger from './messenger'

import input from './ui/input.js'

export default class InputDock extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isVisible: false,
            dockWidth: 200
        }
        messenger.listenToBackground()
        messenger.registerFunction('inputHug', this.inputHug)
    }

    inputHug = (content) => {
        this.setState({ isVisible: true })
    }

    buttonOnClick = () => {
        this.setState({ isVisible: !this.state.isVisible })
    }

    onResize = (value) => {
        this.setState({ dockWidth: value })
    }

    render() {
        return (
            <div>       
                <Dock
                    position="right"
                    fluid={false}
                    size={this.state.dockWidth}
                    dimMode="none"
                    isVisible={this.state.isVisible}
                    dockStyle={Styles.dock}
                    duration={200}
                    onSizeChange={this.onResize}>

                    <div style={Styles.dock.body}>
                        <div style={Styles.dock.body.content}>
                            Add stuff here
                            <input/>
                        </div>
                    </div>

                </Dock>
            </div>
        )
    }
}