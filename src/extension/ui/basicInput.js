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
        this.props.onChange(value)
        this.onFocus()
        //this.setState({ value: value });
    }

    onFocus = () => {
        this.setState({ hasFocus: true })
        if (this.props.onFocus)
            this.props.onFocus()

        console.log('focus')
    }

    onBlur = () => {
        this.setState({ hasFocus: false })
        if (this.props.onBlur)
            this.props.onBlur()
        console.log('blur')
    }

    onClick = ()=>
    {
        this.onFocus()
    }

    render() {
        return (
            <div style={basicInputStyle.style}>

                Unga  bunga
                <input
                    style={inputStyle.apply({hasFocus:this.state.hasFocus})}
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