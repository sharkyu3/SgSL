import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import RandomWords from 'random-words'
import WordPuzzle from "@blex41/word-search"


export default class WordSearch extends React.Component{
    constructor(){
        super();
        this.state = {
            words: RandomWords({exactly: 10, maxLength: 10}),
            alphabets: [],
            butclass: "start-game",
            congrats: "hide",
            restartclass: "hide",
            grid: null
        };
    }

    //make wordsearch puzzle - return array
    //map over wordsearch puzzle to fnd matching alphabet and insert link (array should return 100 links if 10x10)
    //map over array of links and return gameboard

    componentDidMount() {
        this.getAlphabets();
    }

    getAlphabets() {
        fetch('/games/wordsearch.json')
        .then(res=>res.json())
        .then(result=>this.setState({alphabets: result}));
    }

    startGame(){
        console.log("let's start game", this.state.words);

        const options = {
          dictionary: this.state.words,
          upperCase: true
        };

        var puzzle = WordPuzzle.grid();

        console.log("can we make puzzle?", puzzle)

    }

    render(){
        console.log("word search render");
        return(
            <div className="game-container">
                <div className="row">
                    <div className="col-6 sudoku-holder">
                        <h1>Word Search!</h1>
                        <div className={this.state.congrats}>
                            <h3>Well done on completing the puzzle! Play again?</h3>
                            <img src="/pics/applause.png"/>
                        </div>
                        <button className={this.state.butclass} onClick={()=>{this.startGame()}}>Give me a puzzle!</button>
                        <button className={this.state.restartclass} onClick={()=>{this.startGame()}}>New puzzle please!</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-5 grid-holder">

                    </div>
                </div>
            </div>
            )
    }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <WordSearch />,
    document.body.appendChild(document.createElement('div')),
  )
})