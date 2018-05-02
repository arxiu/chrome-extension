import React, { Component } from 'react'
import Dock from 'react-dock'
import Styles from './ui/styles'
import messenger from './messenger'
import BasicInput from './ui/basicInput'

import Previewer from './ui/previewer'

export default class InputDock extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isVisible: true,
            defaultWidth: 320,
            minDockWidth: 250,
            closeDockWidth:120  ,
            dockWidth: 320,
            inputValue: 'hello',
            content:{}
        }
        messenger.listenToBackground()
        messenger.registerFunction('inputHug', this.inputHug)
    }

    inputHug = (content) => {
        console.log('content', content)
        let width = this.state.dockWidth
        if (this.state.dockWidth < this.state.minDockWidth)
            width = this.state.defaultWidth

        this.setState({ isVisible: true, dockWidth: width, content:content })
    }

    buttonOnClick = () => {
        this.setState({ isVisible: !this.state.isVisible })
    }

    onResize = (value) => {
    
        if (value < this.state.minDockWidth)
            this.setState({ dockWidth: this.state.minDockWidth })
        else
            this.setState({ dockWidth: value })   
    }

    onInputChange = (newValue) => {
        this.setState({ inputValue: newValue })
    }

    render() {
        return (
            <Dock
                position="right"
                fluid={false}
                size={this.state.dockWidth}
                dimMode="none"
                isVisible={this.state.isVisible}
                dockStyle={Styles.dock}
                duration={200}
                onSizeChange={this.onResize}>
                <div style={Styles.section}>
                    <Previewer
                        content={this.state.content}
                        value={this.state.inputValue}
                        onChange={this.onInputChange} />
                </div>

                <div style={Styles.section}>
                    <BasicInput
                        value={this.state.inputValue}
                        onChange={this.onInputChange} />
                </div>
            </Dock>

        )
    }
}

/*
<iframe
    style={{ width: '100%',height: '100%'}}
    frameBorder={0}
    allowTransparency="true"
    src={chrome.extension.getURL(`inject.html?protocol=${location.protocol}`)}/>
    */
/*
*/