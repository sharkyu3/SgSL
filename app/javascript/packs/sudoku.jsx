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
            gridclass: "col-8 grid-holder"
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
        this.setState({grid: puzzle, answer: solution})
    }

    render(){
        let array = [];
        let numberLink = [];
        let boardDisplay = "";
        let numbersDisplay = "";

        if(this.state.grid !== null){
            array = this.state.grid;
            let haoma = this.state.numbers.map(numbers => {
                numberLink.push(numbers.link)
            })
        }

        if(array.length > 0){
            boardDisplay = array.map((number, index) => {
                numbersDisplay = numberLink.map((image) => {
                return <div className="cell" key={index}><img src={image} height="50px"></img></div>
            })

            })
        }



        return(
            <div className="game-container">
                <h1>Sudoku!</h1>
                <button className="start-game" onClick={()=>{this.startGame()}}>Give me a puzzle!</button>
                <div className={this.state.gridclass}>
                {boardDisplay}
                    <div className="row-1">
                        <div className="cell">{array[0]}</div>
                        <div className="cell">{array[1]}</div>
                        <div className="cell vert">{array[2]}</div>
                        <div className="cell">{array[3]}</div>
                        <div className="cell">{array[4]}</div>
                        <div className="cell vert">{array[5]}</div>
                        <div className="cell">{array[6]}</div>
                        <div className="cell">{array[7]}</div>
                        <div className="cell">{array[8]}</div>
                    </div>

                    <div className="row-2">
                        <div className="cell">{array[9]}</div>
                        <div className="cell">{array[10]}</div>
                        <div className="cell vert">{array[11]}</div>
                        <div className="cell">{array[12]}</div>
                        <div className="cell">{array[13]}</div>
                        <div className="cell vert">{array[14]}</div>
                        <div className="cell">{array[15]}</div>
                        <div className="cell">{array[16]}</div>
                        <div className="cell">{array[17]}</div>
                    </div>

                    <div className="row-3">
                        <div className="cell">{array[18]}</div>
                        <div className="cell">{array[19]}</div>
                        <div className="cell vert">{array[20]}</div>
                        <div className="cell">{array[21]}</div>
                        <div className="cell">{array[22]}</div>
                        <div className="cell vert">{array[23]}</div>
                        <div className="cell">{array[24]}</div>
                        <div className="cell">{array[25]}</div>
                        <div className="cell">{array[26]}</div>
                    </div>

                    <div className="row-4">
                        <div className="cell">{array[27]}</div>
                        <div className="cell">{array[28]}</div>
                        <div className="cell vert">{array[29]}</div>
                        <div className="cell">{array[30]}</div>
                        <div className="cell">{array[31]}</div>
                        <div className="cell vert">{array[32]}</div>
                        <div className="cell">{array[33]}</div>
                        <div className="cell">{array[34]}</div>
                        <div className="cell">{array[35]}</div>
                    </div>

                    <div className="row-5">
                        <div className="cell">{array[36]}</div>
                        <div className="cell">{array[37]}</div>
                        <div className="cell vert">{array[38]}</div>
                        <div className="cell">{array[39]}</div>
                        <div className="cell">{array[40]}</div>
                        <div className="cell vert">{array[41]}</div>
                        <div className="cell">{array[42]}</div>
                        <div className="cell">{array[43]}</div>
                        <div className="cell">{array[44]}</div>
                    </div>

                    <div className="row-6">
                        <div className="cell">{array[45]}</div>
                        <div className="cell">{array[46]}</div>
                        <div className="cell vert">{array[47]}</div>
                        <div className="cell">{array[48]}</div>
                        <div className="cell">{array[49]}</div>
                        <div className="cell vert">{array[50]}</div>
                        <div className="cell">{array[51]}</div>
                        <div className="cell">{array[52]}</div>
                        <div className="cell">{array[53]}</div>
                    </div>

                    <div className="row-7">
                        <div className="cell">{array[54]}</div>
                        <div className="cell">{array[55]}</div>
                        <div className="cell vert">{array[56]}</div>
                        <div className="cell">{array[57]}</div>
                        <div className="cell">{array[58]}</div>
                        <div className="cell vert">{array[59]}</div>
                        <div className="cell">{array[60]}</div>
                        <div className="cell">{array[61]}</div>
                        <div className="cell">{array[62]}</div>
                    </div>

                    <div className="row-8">
                        <div className="cell">{array[63]}</div>
                        <div className="cell">{array[64]}</div>
                        <div className="cell vert">{array[65]}</div>
                        <div className="cell">{array[66]}</div>
                        <div className="cell">{array[67]}</div>
                        <div className="cell vert">{array[68]}</div>
                        <div className="cell">{array[69]}</div>
                        <div className="cell">{array[70]}</div>
                        <div className="cell">{array[71]}</div>
                    </div>

                    <div className="row-9">
                        <div className="cell">{array[72]}</div>
                        <div className="cell">{array[73]}</div>
                        <div className="cell vert">{array[74]}</div>
                        <div className="cell">{array[75]}</div>
                        <div className="cell">{array[76]}</div>
                        <div className="cell vert">{array[77]}</div>
                        <div className="cell">{array[78]}</div>
                        <div className="cell">{array[79]}</div>
                        <div className="cell">{array[80]}</div>
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