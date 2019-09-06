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

    componentDidUpdate(prevProps){
        if(this.props.start !== prevProps.start){
            this.setState({input: ""})
        }
    }

    onSpace(){
        if (event.key === " " && this.props.start === true){
            this.props.onSpaceHandler()
            this.setState({input: ""});
        }else if(event.key === " " && this.props.start === false){
            this.props.startgame()
        }
    }

    changeHandler(){
        this.setState({input:event.target.value});
    }

    render(){
        return(
            <div>
                <input onChange={()=>{this.changeHandler()}} value={this.state.input} onKeyDown={()=>{this.onSpace()}}/>
            </div>
            )
    }
}