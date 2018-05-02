import React, { Component } from 'react'
import Styles from './styles'
import SuperStyle from './superStyle'

const basicInputStyle = new SuperStyle(Styles.basicInput)
const inputStyle = new SuperStyle(Styles.basicInput.input)

export default class BasicInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasFocus: false }
    }

    onChange = (event) => {
        const value = event.target.value
        console.log('value', value)
        let found = this.checkEndingPattern(value)
        console.log('value2')
        if(!found)
            this.props.onChange(value)
        this.onFocus()
    }

    checkEndingPattern(str) {
        let pat = this.props.endingPattern
        if (pat && this.props.onEndingPattern) {
            let hasEndingPattern = this.hasEndingPattern(str, pat)
            console.log('hasEndingPattern', hasEndingPattern)
            if (hasEndingPattern) {
                let text = str.slice(0, -pat.length)
                this.props.onEndingPattern(text)
                return true
            }
        }
        return false
    }
    onFocus = () => {
        if(this.state.hasFocus)
            return

        this.setState({ hasFocus: true })
        if (this.props.onFocus)
            this.props.onFocus()
    }

    onBlur = () => {
        this.setState({ hasFocus: false })
        if (this.props.onBlur)
            this.props.onBlur()
    }

    onClick = () => {
        this.onFocus()
    }

    onKeyCodePress=(e)=>{
        if(e.code === this.props.keyCode)
            this.props.onKeyCodePressed(this.props.keyCode)
    }

    hasEndingPattern = (str, pattern) => {
        let index = str.indexOf(pattern)
        if (index <1)
            return false
        return (index === str.length - pattern.length)
    }

    render() {
        return (
            <div style={basicInputStyle.style}>
                <input
                    style={inputStyle.apply({ hasFocus: this.state.hasFocus })}
                    type="text"
                    value={this.props.value}
                    onChange={this.onChange}
                    onBlur={this.onBlur}
                    onFocus={this.onFocus}
                    onClick={this.onClick}
                    onKeyCodePress={this.onKeyCodePress}
                />
            </div>
        );
    }
}