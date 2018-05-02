import React, { Component } from 'react'
import Dock from 'react-dock'
import Styles from './ui/styles'
import messenger from './messenger'
import BasicInput from './ui/basicInput'
import Previewer from './ui/previewer'
//import Hitag from '../../../arxiu-ipld-hitag/'

export default class InputDock extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isVisible: false,
            defaultWidth: 320,
            minDockWidth: 250,
            closeDockWidth: 120,
            dockWidth: 320,
            inputValue: 'hello',
            currentHitag: [],
            hitags: [],
            content: {},
        }
        messenger.listenToBackground()
        messenger.registerFunction('inputHug', this.inputHug)
    }

    inputHug = (content) => {
        console.log('content', content)
        let width = this.state.dockWidth
        if (this.state.dockWidth < this.state.minDockWidth)
            width = this.state.defaultWidth

        this.setState({ isVisible: true, dockWidth: width, content: content })
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
        console.log('ic', newValue)
        this.setState({ inputValue: newValue })
    }

    onNewTag = (tag) => {
        console.log('nt', tag)
        let hitag = this.state.currentHitag
        if(tag!= '')
            hitag.push(tag)
        this.setState({ inputValue: '', currentHitag : hitag })
    }

    onNewHitag = (tag) => {
        console.log('ht', tag)

        let hitag = this.state.currentHitag
        hitag.push(tag)
        hitags = this.state.hitags.push(hitag)
        this.setState({ inputValue: '', currentHitag : {} })
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
                    {this.state.currentHitag}
                    <BasicInput
                        value={this.state.inputValue}
                        onChange={this.onInputChange}
                        endingPattern={'  '}
                        onEndingPattern={this.onNewTag}
                        onKeyCodePress ={this.onNewHitag}
                        keyCode={'Enter'}
                        />
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