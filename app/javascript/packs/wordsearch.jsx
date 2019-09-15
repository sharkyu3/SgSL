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
            answer: [],
            correctcounter: 0,
            clicked: null,
            direction: null,
            forcheck: [],
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
        const options = {
          dictionary: this.state.words,
          upperCase: true
        };

        var ws = new WordPuzzle(options);

        var ans = ws.grid.map((row, index) => {
            ws.grid[index].map((col, index) => {
                this.state.answer.push(col)
            })
        })
        this.setState({grid: ws.grid, butclass: "hide", restartclass: "start-game"})
    }

    checkWin(){
        console.log("checking for win");
        //check counter. if counter = 10, WINNNNN!
    }

    checkWord(){
        if(this.state.clicked === null){
            this.state.forcheck.push(this.state.answer[event.target.id])
            this.setState({clicked: event.target.id})
            var target = document.getElementById(event.target.id);
            target.classList.add("selected");
            console.log("clicked is null, set first", this.state.forcheck);
            console.log("and another", this.state.clicked)
        }else{
            if(this.state.forcheck.length === 1){
                if(parseInt(event.target.id) === parseInt(this.state.clicked) + 1 || parseInt(event.target.id) === parseInt(this.state.clicked) - 1 || parseInt(event.target.id) === parseInt(this.state.clicked) + 10 || parseInt(event.target.id) === parseInt(this.state.clicked) - 10 || parseInt(event.target.id) === parseInt(this.state.clicked) + 11 || parseInt(event.target.id) === parseInt(this.state.clicked) - 11 || parseInt(event.target.id) === parseInt(this.state.clicked) + 9 || parseInt(event.target.id) === parseInt(this.state.clicked) - 9){
                    this.state.forcheck.push(this.state.answer[event.target.id])
                    this.setState({clicked: event.target.id});
                    var target = document.getElementById(event.target.id);
                    this.checkWin();
                    target.classList.add("selected");
                    if(parseInt(event.target.id) === parseInt(this.state.clicked) + 1){
                        this.setState({direction:"east"})
                    }else if(parseInt(event.target.id) === parseInt(this.state.clicked) - 1){
                        this.setState({direction:"west"})
                    }else if(parseInt(event.target.id) === parseInt(this.state.clicked) + 10){
                        this.setState({direction:"sth"})
                    }else if(parseInt(event.target.id) === parseInt(this.state.clicked) - 10){
                        this.setState({direction:"nth"})
                    }else if(parseInt(event.target.id) === parseInt(this.state.clicked) - 11){
                        this.setState({direction:"nw"})
                    }else if(parseInt(event.target.id) === parseInt(this.state.clicked) + 9){
                        this.setState({direction:"sw"})
                    }else if(parseInt(event.target.id) === parseInt(this.state.clicked) - 9){
                        this.setState({direction:"ne"})
                    }else if(parseInt(event.target.id) === parseInt(this.state.clicked) + 11){
                        this.setState({direction:"se"})
                    }
                }
            }else{
                if (this.state.direction === "east" && parseInt(event.target.id) === parseInt(this.state.clicked) + 1){
                    this.state.forcheck.push(this.state.answer[event.target.id])
                    this.setState({clicked: event.target.id});
                    var target = document.getElementById(event.target.id);
                    target.classList.add("selected");
                    this.checkWin();
                } else if (this.state.direction === "west" && parseInt(event.target.id) === parseInt(this.state.clicked) - 1){
                    this.state.forcheck.push(this.state.answer[event.target.id])
                    this.setState({clicked: event.target.id});
                    var target = document.getElementById(event.target.id);
                    target.classList.add("selected");
                    this.checkWin();
                } else if (this.state.direction === "nth" && parseInt(event.target.id) === parseInt(this.state.clicked) - 10){
                    this.state.forcheck.push(this.state.answer[event.target.id])
                    this.setState({clicked: event.target.id});
                    var target = document.getElementById(event.target.id);
                    target.classList.add("selected");
                    this.checkWin();
                }else if (this.state.direction === "sth" && parseInt(event.target.id) === parseInt(this.state.clicked) + 10){
                    this.state.forcheck.push(this.state.answer[event.target.id])
                    this.setState({clicked: event.target.id});
                    var target = document.getElementById(event.target.id);
                    target.classList.add("selected");
                    this.checkWin();
                }else if (this.state.direction === "nw" && parseInt(event.target.id) === parseInt(this.state.clicked) - 11){
                    this.state.forcheck.push(this.state.answer[event.target.id])
                    this.setState({clicked: event.target.id});
                    var target = document.getElementById(event.target.id);
                    target.classList.add("selected");
                    this.checkWin();
                } else if (this.state.direction === "sw" && parseInt(event.target.id) === parseInt(this.state.clicked) + 9){
                    this.state.forcheck.push(this.state.answer[event.target.id])
                    this.setState({clicked: event.target.id});
                    var target = document.getElementById(event.target.id);
                    target.classList.add("selected");
                    this.checkWin();
                }else if (this.state.direction === "ne" && parseInt(event.target.id) === parseInt(this.state.clicked) - 9){
                    this.state.forcheck.push(this.state.answer[event.target.id])
                    this.setState({clicked: event.target.id});
                    var target = document.getElementById(event.target.id);
                    target.classList.add("selected");
                    this.checkWin();
                }else if (this.state.direction === "se" && parseInt(event.target.id) === parseInt(this.state.clicked) +11){
                    this.state.forcheck.push(this.state.answer[event.target.id])
                    this.setState({clicked: event.target.id});
                    var target = document.getElementById(event.target.id);
                    target.classList.add("selected");
                    this.checkWin();
                }
            }
        }

        //concat temp array to string
        //check temp against this.state.words ALL LOWERCASE
        //if match, correct, change word div to different color, strikethrough and show merdeaf applause, add 1 to correct counter
        //if match, check for win
        //if not match, shake screen and show alamak
    }

    render(){
        console.log("inside render", this.state.forcheck)
        let array = [];
        let alphabetlink = [];
        let board = "";
        let wordsDisplay = "";
        let answerBoard = []

        if (this.state.grid !== null){
            console.log("grid has been set");
            board = this.state.grid.map((fixed, x) => {
                this.state.grid[x].map((alp, y)=>{
                    this.state.alphabets.map(alphabets=> {
                        if(alphabets.name.toLowerCase() === alp.toLowerCase()){
                            array.push(alphabets.link)
                        }
                    })
                })
            })
        }

        if (array.length > 0){
            wordsDisplay = this.state.words.map((word, index)=>{
                return <div className="wordies" id={word} key={index}>{word.toUpperCase()}</div>
            })
            board = array.map((image, index)=>{
                return <div className="alp-cell" id={index} key={index}><img className="pic-cell" id={index} src={image} onClick={()=>this.checkWord()}/></div>
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