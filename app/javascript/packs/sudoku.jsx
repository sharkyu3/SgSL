import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Sudoku from 'sudoku'


export default class SudokuGame extends React.Component{
    constructor(){
        super();
        this.state = {
            numbers: [],
            grid: null,
            answer: null,
            butclass: "start-game",
            congrats: "hide",
            restartclass: "hide"
        }
        this.onChangeHandler = this.onChangeHandler.bind(this)
        this.checkWin = this.checkWin.bind(this)
    }

    componentDidMount() {
        this.getNumbers();
    }

    getNumbers() {
        fetch('/games/sudoku.json')
        .then(res=>res.json())
        .then(result=>this.setState({numbers: result}));
    }

    startGame(){
        var puzzle = Sudoku.makepuzzle();
        var solution = Sudoku.solvepuzzle(puzzle);

        var puzzlearray=[];
        var solutionarray=[];

        var actualpuzzle = puzzle.map(number =>{
            if(number !== null){
                puzzlearray.push(number + 1)
            }else(
                puzzlearray.push(null))
        })

        var actualsolution = solution.map(number =>{
            solutionarray.push(number + 1)
        })

        this.setState({grid: puzzlearray, answer: solutionarray, butclass: "hide", restartclass: "start-game"})
    }

    checkWin(){
        var checking = this.state.grid.every(num => num !== null)
        if (checking === true){
            this.setState({butclass: "hide", congrats:"congrats", grid: null, answer: null, restartclass: "start-game"})
        }
    }

    onChangeHandler(){
        if(isNaN(parseInt(event.target.value))=== true){
            document.getElementById(event.target.id).value=''
        }else{
            console.log("answer sheet", this.state.answer)

            if(parseInt(event.target.value) === this.state.answer[event.target.id]){
                this.state.grid[event.target.id] = parseInt(event.target.value)
                var winCell = document.getElementById("cell-" + event.target.id)
                while(winCell.firstChild){
                    winCell.removeChild(winCell.firstChild);
                }
                winCell.innerHTML = event.target.value;
                winCell.classList.remove("empty-cell");
                winCell.classList.add("filled-cell")
                this.checkWin();

            }else{
                let weeId = document.getElementById(event.target.id);
                document.getElementById(event.target.id).value='';
                document.getElementById(event.target.id).style.backgroundColor="red"
                setTimeout(() => {
                    let weeArray = document.querySelectorAll(".number-input")
                    for (let i=0; i<weeArray.length; i++) {
                        weeArray[i].style.backgroundColor="white"
                    }
                }, 500)
            }
        }

    }

    render(){
        let array = [];
        let numberLink = [];
        let board = "";

        if(this.state.grid !== null){
            let haoma = this.state.numbers.map(numbers => {
                numberLink.push(numbers.link)
            })

            board = this.state.grid.map((fixed, index) =>{

                if(fixed !== null){
                    this.state.numbers.map(numbers => {
                        if(parseInt(numbers.name) === parseInt(fixed)){
                            array.push(numbers.link)
                        }
                    })
                }else{
                    array.push(null)
                }
            })
        }

        if(array.length > 0){
            board = array.map((image, index) => {
                let cellID = "cell-"+index
                if(image !== null){
                    return <div className="cell" id={cellID} key={index}><img src={image} /></div>
                }else{
                    let inputID = "input-"+index
                    return<div className="cell empty-cell" id={cellID} key={index} value={index}><input id={index} className="number-input" onChange={this.onChangeHandler}></input></div>
                }

            })
        }

        return(
            <div className="game-container">
                <div className="row">
                    <div className="col-6 sudoku-holder">
                        <h1>Sudoku!</h1>
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
                        {board}
                    </div>
                </div>
            </div>
        )
    }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <SudokuGame />,
    document.body.appendChild(document.createElement('div')),
  )
})