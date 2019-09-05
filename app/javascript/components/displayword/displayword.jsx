import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import RandomWords from 'random-words'

export default class DisplayWord extends React.Component{
    constructor(){
        super();
        this.state = {
            word : ""
        };
    }



    render(){
        let word = this.props.word;
        let letters = word.split("");
        let splitword = letters.map((letter, index)=>{
            return(<div>{letter}</div>);
        });


        return(
            <div>
                <div>yippee display</div>
                <div>{splitword}</div>
            </div>
            )
    }
}