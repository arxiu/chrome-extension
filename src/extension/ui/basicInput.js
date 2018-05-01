import React, { Component } from 'react'
import styled from 'styled-components';


export default class BasicInput extends React.Component {
    constructor(props) {
        super(props);
    }

    handleChange(event) {
        const value = event.target.value
        this.props.onChange(value)
        //this.setState({ value: value });
    }

    render() {
        return (
            <div >

                Unga  bunga
                <input
                    type="text"
                    value={this.props.value}
                    onChange={this.handleChange.bind(this)
                    } />
            </div>
        );
    }
}