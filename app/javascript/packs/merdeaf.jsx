import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import RandomWords from 'random-words'
import Input from '../components/input/input';
import DisplayWord from '../components/displayword/displayword';


export default class Main extends React.Component{
    constructor(){
        super();
        this.state = {
            start: false,
            buttonclass: "show-button",
            name: "",
            score : 0,
            stage : 1,
            countDown: 2,

            one : RandomWords({exactly: 60, min: 3, maxLength: 5}),
            two : RandomWords({exactly: 60, min: 4, maxLength: 9}),
            three : RandomWords({exactly: 60, min: 3, maxLength: 6}),
            four : RandomWords({exactly: 60, min: 4, maxLength: 9}),
            five : RandomWords({exactly: 60, min: 5, maxLength: 10}),

            word: ""
        };
        this.onSpaceHandler = this.onSpaceHandler.bind(this);
        this.endStage = this.endStage.bind(this)
    }

    componentDidMount() {
        if(this.state.stage === 1){
            this.setState({word: this.state.one[0]});
        }else if (this.state.stage === 2){
            this.setState({word: this.state.two[0]});
        }else if (this.state.stage === 3){
            this.setState({word: this.state.three[0]});
        }else if (this.state.state === 4){
            this.setState({word: this.state.four[0]});
        }else{
            this.setState({word: this.state.five[0]});
        }
    }

    timer = () => {
        this.interval = setInterval(() => {
            this.setState(prevState => ({
                countDown: prevState.countDown - 1,
            }), () => {
                if (this.state.countDown === 0) {
                    this.stopCountDown();
                }
            });
        }, 1000)
    }

    stopCountDown = () => {
        clearInterval(this.interval);
        this.endStage()
    }

    endStage(){
        this.setState({start: false, buttonclass: "show-button", countDown: 3})
    }

    startGame(){
        this.setState({start: true, buttonclass: "hide-button"});
        this.timer();
    }

    onSpaceHandler(){
        if (event.key === " "){
            if(this.state.word === event.target.value.trim()){
                let newScore = this.state.score + 10;
                this.setState({score: newScore});
                if (this.state.stage === 1){
                    this.state.one.shift();
                    this.setState({word: this.state.one[0]});
                    console.log(this.state.one)
                }else if (this.state.stage === 2){
                    this.state.two.shift();
                    this.setState({word: this.state.two[0]});
                    console.log(this.state.two)
                }else if (this.state.stage === 3){
                    this.state.three.shift();
                    this.setState({word: this.state.three[0]});
                    console.log(this.state.three)
                }else if (this.state.state === 4){
                    this.state.four.shift();
                    this.setState({word: this.state.four[0]});
                    console.log(this.state.four)
                }else{
                    this.state.five.shift();
                    this.setState({word: this.state.five[0]});
                    console.log(this.state.five)
                }
            }else{
                console.log("WRONG!")
                if(this.state.score > 0){
                    let newScore = this.state.score - 5;
                    this.setState({score: newScore})
                }
            }
        }
    }

  render(){
    return(
        <div className="container">
            <h1 className="game-title">Swim Merdeaf Swim!</h1>
            <div className="row">
                {this.state.countDown}
            </div>
            <div className="row">
                <div className="score">
                    {this.state.score}
                </div>
            </div>
            <div className="row">
                <DisplayWord word={this.state.word}/>
            </div>
            <div>
                <button className={this.state.buttonclass} onClick={()=>{this.startGame()}}>Start Level</button>
            </div>
            <div className="row">
                <Input onSpaceHandler={this.onSpaceHandler} />
            </div>
        </div>
         );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Main />,
    document.body.appendChild(document.createElement('div')),
  )
})