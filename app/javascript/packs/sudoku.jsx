import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Sudoku from 'sudoku'


export default class SudokuGame extends React.Component{
    constructor(){
        super();
        this.state = {
            numbers: []
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
        console.log("starting sudoku");
        var puzzle = Sudoku.makepuzzle();
        var solution = Sudoku.solvepuzzle(puzzle);
        var difficulty = Sudoku.ratepuzzle(puzzle, 4);

        puzzle;
    }

    render(){
        console.log("sudoku render", this.state.numbers);
        return(
            <div>
                <h1>Sudoku!</h1>
                <button onClick={()=>{this.startGame()}}>Give me a puzzle!</button>
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