import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import RandomWords from 'random-words'

export default class Input extends React.Component{
    constructor(){
        super();
        this.state = {
            input: ""
        };
    }

    changeHandler(){
        this.setState({input:event.target.value});
    }

    render(){
        return(
            <div>
                <input onChange={()=>{this.changeHandler()}} value={this.state.input} onKeyDown={()=>{this.props.onSpaceHandler()}}/>
            </div>
            )
    }
}