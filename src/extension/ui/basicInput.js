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

    handleChange = (event) => {
        const value = event.target.value
        this.checkEndingPattern(value)

        this.props.onChange(value)
        this.onFocus()
        //this.setState({ value: value });
    }

    checkEndingPattern(str) {
        if (this.props.endingPattern && this.props.onEndingPattern) {
            if (this.hasEndingPattern(str, this.props.endingPattern)) {
                let text = str.slice(0, -this.props.endingPattern.length)
                this.props.onEndingPattern(text)
            }
        }
    }
    onFocus = () => {
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

    hasEndingPattern = (str, pattern) => {
        let index = str.indexOf(pattern)
        console.log(index, str.length, pattern.length)
        if (index == str.length - pattern.length)
            return true
        return false
    }

    render() {
        return (
            <div style={basicInputStyle.style}>
                <input
                    style={inputStyle.apply({ hasFocus: this.state.hasFocus })}
                    type="text"
                    value={this.props.value}
                    onChange={this.handleChange}
                    onBlur={this.onBlur}
                    onFocus={this.onFocus}
                    onClick={this.onClick}
                />
            </div>
        );
    }
}