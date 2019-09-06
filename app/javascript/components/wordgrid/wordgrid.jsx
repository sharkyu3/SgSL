import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import WordPuzzle from "@blex41/word-search"

export default class WordGrid extends React.Component{
    constructor(){
        super();
        this.state = {
            words: null,
        };
    }

    componentDidMount() {
        this.getAlphabets();
        this.setState({words: this.props.words});
    }

    getAlphabets() {
        fetch('/games/wordsearch.json')
        .then(res=>res.json())
        .then(result=>this.setState({alphabets: result}));
    }

    render(){
        return(
            <div>
                <h1>gridddddd!</h1>
            </div>
            )
    }
}