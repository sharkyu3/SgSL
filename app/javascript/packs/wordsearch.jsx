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
            idsclicked: [],
            boardclass: "hide"
        }
        this.select = this.select.bind(this);
        this.deselect = this.deselect.bind(this)
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
        this.setState({grid: ws.grid, butclass: "hide", restartclass: "start-game", boardclass: "col-10 grid-holder", congrats: "hide",correctcounter: 0, clicked: null, direction: null, forcheck: [], idsclicked: []})

     console.log("inside start", this.state.answer);
     console.log("start 2", this.state.words)
    }

    checkWord(){
        this.state.words.map(word=>{
            if(word === this.state.forcheck.join('').toLowerCase()){
                var newCount = this.state.correctcounter + 1;
                this.setState({correctcounter: newCount});
                this.state.idsclicked.map(id =>{
                    var temp = document.getElementById(parseInt(id));
                    temp.classList.remove("selected");
                    temp.classList.add("done");
                    temp.classList.remove("selected");
                })
                var wordie = document.getElementById(this.state.forcheck.join('').toLowerCase());
                wordie.classList.add("found");

                this.checkWin();
            }
        })
    }

    checkWin(){
        if (parseInt(this.state.correctcounter) === 9){
            console.log("whoopie won!!!", this.state.correctcounter);
            this.setState({butclass: "hide", congrats:"congrats", grid: null, answer: [], restartclass: "start-game", boardclass: "hide", words: RandomWords({exactly: 10, maxLength: 10})})
        }else{
            console.log("havent win", this.state.correctcounter)
            this.setState({clicked: null, direction: null, forcheck: [], idsclicked: []})
        }
    }

    deselect(){
        if(this.state.idsclicked.length > 0){
            if(parseInt(this.state.idsclicked[0]) === parseInt(event.target.id)){
                this.state.idsclicked.map(id => {
                    var temp = document.getElementById(parseInt(id));
                    temp.classList.remove('selected')
                })
                this.setState({clicked: null, direction: null, forcheck: [], idsclicked: []})
            }
        }
        this.select()
    }

    select(){
        if(this.state.clicked === null){
            this.state.forcheck.push(this.state.answer[event.target.id]);
            this.state.idsclicked.push(event.target.id);
            this.setState({clicked: event.target.id})
            var target = document.getElementById(event.target.id);
            target.classList.add("selected");
        }else{
            if(this.state.forcheck.length === 1){
                if(parseInt(event.target.id) === parseInt(this.state.clicked) + 1 || parseInt(event.target.id) === parseInt(this.state.clicked) - 1 || parseInt(event.target.id) === parseInt(this.state.clicked) + 10 || parseInt(event.target.id) === parseInt(this.state.clicked) - 10 || parseInt(event.target.id) === parseInt(this.state.clicked) + 11 || parseInt(event.target.id) === parseInt(this.state.clicked) - 11 || parseInt(event.target.id) === parseInt(this.state.clicked) + 9 || parseInt(event.target.id) === parseInt(this.state.clicked) - 9){
                    this.state.forcheck.push(this.state.answer[event.target.id]);
                    this.state.idsclicked.push(event.target.id);
                    this.setState({clicked: event.target.id});
                    var target = document.getElementById(event.target.id);
                    this.checkWord();
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
                    this.state.forcheck.push(this.state.answer[event.target.id]);
                    this.state.idsclicked.push(event.target.id);
                    this.setState({clicked: event.target.id});
                    var target = document.getElementById(event.target.id);
                    target.classList.add("selected");
                    this.checkWord();
                } else if (this.state.direction === "west" && parseInt(event.target.id) === parseInt(this.state.clicked) - 1){
                    this.state.forcheck.push(this.state.answer[event.target.id]);
                    this.state.idsclicked.push(event.target.id);
                    this.setState({clicked: event.target.id});
                    var target = document.getElementById(event.target.id);
                    target.classList.add("selected");
                    this.checkWord();
                } else if (this.state.direction === "nth" && parseInt(event.target.id) === parseInt(this.state.clicked) - 10){
                    this.state.forcheck.push(this.state.answer[event.target.id]);
                    this.state.idsclicked.push(event.target.id);
                    this.setState({clicked: event.target.id});
                    var target = document.getElementById(event.target.id);
                    target.classList.add("selected");
                    this.checkWord();
                }else if (this.state.direction === "sth" && parseInt(event.target.id) === parseInt(this.state.clicked) + 10){
                    this.state.forcheck.push(this.state.answer[event.target.id]);
                    this.state.idsclicked.push(event.target.id);
                    this.setState({clicked: event.target.id});
                    var target = document.getElementById(event.target.id);
                    target.classList.add("selected");
                    this.checkWord();
                }else if (this.state.direction === "nw" && parseInt(event.target.id) === parseInt(this.state.clicked) - 11){
                    this.state.forcheck.push(this.state.answer[event.target.id]);
                    this.state.idsclicked.push(event.target.id);
                    this.setState({clicked: event.target.id});
                    var target = document.getElementById(event.target.id);
                    target.classList.add("selected");
                    this.checkWord();
                } else if (this.state.direction === "sw" && parseInt(event.target.id) === parseInt(this.state.clicked) + 9){
                    this.state.forcheck.push(this.state.answer[event.target.id]);
                    this.state.idsclicked.push(event.target.id);
                    this.setState({clicked: event.target.id});
                    var target = document.getElementById(event.target.id);
                    target.classList.add("selected");
                    this.checkWord();
                }else if (this.state.direction === "ne" && parseInt(event.target.id) === parseInt(this.state.clicked) - 9){
                    this.state.forcheck.push(this.state.answer[event.target.id]);
                    this.state.idsclicked.push(event.target.id);
                    this.setState({clicked: event.target.id});
                    var target = document.getElementById(event.target.id);
                    target.classList.add("selected");
                    this.checkWord();
                }else if (this.state.direction === "se" && parseInt(event.target.id) === parseInt(this.state.clicked) +11){
                    this.state.forcheck.push(this.state.answer[event.target.id]);
                    this.state.idsclicked.push(event.target.id);
                    this.setState({clicked: event.target.id});
                    var target = document.getElementById(event.target.id);
                    target.classList.add("selected");
                    this.checkWord();
                }
            }
        }
    }

    render(){
        let array = [];
        let alphabetlink = [];
        let board = "";
        let wordsDisplay = "";
        let answerBoard = []

        if (this.state.grid !== null){
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
                return <div className="alp-cell" key={index}><img className="pic-cell" id={index} src={image} onClick={()=>this.deselect()} onKeyDown={()=>{this.resetState()}}/></div>
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
                            <div className="col-9 board-holder">
                                <h5 className="ins">Click on the first letter of your selection to undo!</h5>
                                {board}
                            </div>
                            <div className="col-3 word-holder">
                                <h5 className="find"><u>Find these words:</u></h5>
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