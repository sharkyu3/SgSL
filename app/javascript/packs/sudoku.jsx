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
            gridclass: "col-5 grid-holder"
        };
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

        this.setState({grid: puzzlearray, answer: solutionarray})
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
                    return<div className="cell empty-cell" id={cellID} key={index}></div>
                }

            })
        }

        return(
            <div className="game-container">
                <div className="row">
                    <div className="col-6 sudoku-holder">
                        <h1>Sudoku!</h1>
                        <button className="start-game" onClick={()=>{this.startGame()}}>Give me a puzzle!</button>
                    </div>
                </div>
                <div className="row">
                    <div className={this.state.gridclass}>
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