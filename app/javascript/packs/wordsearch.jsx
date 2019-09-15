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
            grid: null,
            boardclass: "col-10 grid-holder"
        };
    }

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

        var ws = new WordPuzzle(options);

        this.setState({grid: ws.grid, butclass: "hide", restartclass: "start-game"})
    }

    render(){
        console.log("word search render", this.state.grid);

        let array = [];
        let alphabetlink = [];
        let board = "";
        let wordsDisplay = "";

        if (this.state.grid !== null){
            console.log("grid has been set");
            board = this.state.grid.map((fixed, index) => {
                this.state.grid[index].map((alp, index)=>{
                    this.state.alphabets.map(alphabets=> {
                        if(alphabets.name.toLowerCase() === alp.toLowerCase()){
                            array.push(alphabets.link)
                        }
                    })
                })
            })
        }
        console.log("does array work?", array)

        if (array.length > 0){
            wordsDisplay = this.state.words.map((word, index)=>{
                return <div className="wordies" id={word} key={index}>{word.toUpperCase()}</div>
            })
            board = array.map((image, index)=>{
                return <div className="alp-cell" id={index} key={index}><img className="pic-cell" src={image}/></div>
            })
        }

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
                    <div className={this.state.boardclass}>
                        <div className="row">
                            <div className="col-8 board-holder">
                                {board}
                            </div>
                            <div className="col-4 word-holder">
                                <h5>Find these words:</h5>
                                {wordsDisplay}
                            </div>
                        </div>
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