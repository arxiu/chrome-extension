import React, { Component } from 'react'
import Styles from './styles'
import SuperStyle from './superStyle'

export default class Previewer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        let view = <div/>

        if(this.props.content)
        {
            if(this.props.content.img)
                view = <img
                    src={this.props.content.img}
                    style ={{width:'100%', height:'100%'}}/>
            else if (this.props.content.link)
                view = this.props.content.link
            else if (this.props.content.text)
                view = this.props.content.text

        }
        return (
            <div style = {{textAlign:'center'}}>
                {view}
            </div>
        );
    }
}