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
            divclass: "hide-div",
            name: "",
            score : 0,
            stage : 1,
            countDown: 15,
            url: '/assets/main.png',

            one : RandomWords({exactly: 60, min: 3, maxLength: 5}),
            two : RandomWords({exactly: 60, min: 4, maxLength: 9}),
            three : RandomWords({exactly: 60, min: 3, maxLength: 6}),
            four : RandomWords({exactly: 60, min: 4, maxLength: 9}),
            five : RandomWords({exactly: 60, min: 5, maxLength: 10}),

            word: ""
        };
        this.onSpaceHandler = this.onSpaceHandler.bind(this);
        this.endStage = this.endStage.bind(this);
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
        this.setState({start: false, buttonclass: "show-button", countDown: 15, divclass: "show-div"})
        if(this.state.stage < 5){
            let newStage = this.state.stage + 1;
            this.setState({stage: newStage})
        }else if(this.state.stage === 5){
            console.log("end game")
        }
    }

    startGame(){
        console.log("start: ", this.state.stage);
        this.setState({start: true, buttonclass: "hide-button", divclass: "hide-div"});
        this.timer();
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

    onSpaceHandler(){
        if (event.key === " "){
            if(this.state.word === event.target.value.trim() && this.state.start === true){
                if (this.state.stage === 1){
                    this.state.one.shift();
                    let newScore = this.state.score + 10;
                    this.setState({word: this.state.one[0], score: newScore});
                    console.log(this.state.one)
                }else if (this.state.stage === 2){
                    this.state.two.shift();
                    let newScore = this.state.score + 12;
                    this.setState({word: this.state.two[0], score: newScore});
                    console.log(this.state.two)
                }else if (this.state.stage === 3){
                    this.state.three.shift();
                    let newScore = this.state.score + 14;
                    this.setState({word: this.state.three[0], score: newScore});
                    console.log(this.state.three)
                }else if (this.state.state === 4){
                    this.state.four.shift();
                    let newScore = this.state.score + 16;
                    this.setState({word: this.state.four[0], score: newScore});
                    console.log(this.state.four)
                }else{
                    this.state.five.shift();
                    let newScore = this.state.score + 18;
                    this.setState({word: this.state.five[0], score: newScore});
                    console.log(this.state.five)
                }
                this.setState({url:"/assets/good.png"});
            }else{
                if(this.state.score > 0 && this.state.start === true){
                    let newScore = this.state.score - 5;
                    this.setState({score: newScore, url: "/assets/alamak.png"})
                }
            }
        }
    }

  render(){
    return(
        <div className="container">
            <h1 className="game-title">Swim Merdeaf Swim!</h1>
            <div className={this.state.divclass}>
                End of level! Click on the button to start next level!
            </div>
            <div className="row">
                {this.state.countDown}
            </div>
            <div className="row">
                <div className="score">
                    {this.state.score}
                </div>
            </div>
            <div>
                <DisplayWord word={this.state.word}/>
            </div>
            <div>
                <button className={this.state.buttonclass} onClick={()=>{this.startGame()}}>Start</button>
            </div>
            <div>
                <Input onSpaceHandler={this.onSpaceHandler} start={this.state.start}/>
            </div>
            <div>
                <img src={this.state.url}/>
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