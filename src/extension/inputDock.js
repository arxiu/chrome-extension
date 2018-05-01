import React, { Component } from 'react'
import Dock from 'react-dock'
import { Styles } from './styles'
import messenger from './messenger'
import BasicInput from './ui/basicInput.js'

export default class InputDock extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isVisible: true,
            dockWidth: 320,
            inputValue:'hello'
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

    onInputChange = (newValue) =>
    {
        console.log(newValue)
        this.setState({inputValue:newValue})
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
                     <div style={Styles.dock.body}>
                            <div style={Styles.dock.body.content}>
                                Add stuff here
                                
                                <BasicInput
                                    value={this.state.inputValue}
                                    onChange={this.onInputChange} />
                               
                            </div>  
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