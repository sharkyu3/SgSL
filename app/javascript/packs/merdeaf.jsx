import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import RandomWords from 'random-words'
import Input from '../components/input/input'
import DisplayWord from '../components/displayword/displayword'


export default class Main extends React.Component{
    constructor(){
        super();
        this.state = {
            start: false,
            buttonclass: "show-button",
            divclass: "hide-div",
            scoreclass: "hide-div",
            picclass:"hide-div",
            name: "",
            score : 0,
            stage : 5,
            countDown: 2,
            url: '/assets/main.png',

            one : RandomWords({exactly: 60, maxLength: 5}),
            two : RandomWords({exactly: 60, maxLength: 8}),
            three : RandomWords({exactly: 60, maxLength: 6}),
            four : RandomWords({exactly: 60, maxLength: 8}),
            five : RandomWords({exactly: 60, maxLength: 8}),

            word: ""
        };
        this.onSpaceHandler = this.onSpaceHandler.bind(this);
        this.endStage = this.endStage.bind(this);
        this.startGame = this.startGame.bind(this)
    }

    logScore(){
        if (event.key === " "){
            var data = {
                name: event.target.value,
                score: this.state.score
            }
            console.log(data)

            var request = new XMLHttpRequest();

            request.addEventListener("load", function(){
                console.log("done logging score");
                window.location.href = "/merdeaf_scores";
            })

            request.open("POST", '/merdeaf_scores');
            request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            request.send(JSON.stringify(data));

            console.log("inside log score", data);
        }
    }

    timer = () => {
        this.interval = setInterval(() => {
            this.setState(prevState => ({
                countDown: prevState.countDown - 1,
            }), () => {
                if(this.state.countDown === 10){
                    this.setState({picclass: "show-div"})
                }
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
        this.setState({start: false, countDown: 60, divclass: "show-div"})
        if(this.state.stage < 5){
            let newStage = this.state.stage + 1;
            this.setState({stage: newStage})
        }else if(this.state.stage === 5){
            console.log("end game");
            this.setState({scoreclass: "show-div", url: "/assets/hooray.png", picclass: "hide-div"})
        }
    }

    startGame(){
        this.setState({start: true, buttonclass: "hide-button", divclass: "hide-div", picclass: "hide-div"});
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
                if (this.state.url === "/assets/applause.png" || this.state.url === "/assets/main.png"){
                    this.setState({url:"/assets/good.png"});
                }else{
                    this.setState({url:"/assets/applause.png"})
                }

            }else{
                this.setState({url: "/assets/alamak.png"})
                if(this.state.score > 0 && this.state.start === true){
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
            <div>
                <button className={this.state.buttonclass} onClick={()=>{this.startGame()}}>Start</button>
            </div>
            <div className={this.state.divclass}>
                End of level! Press the SPACE BAR to start the next level!
            </div>
            <div className={this.state.scoreclass}>
                <h3>GAME OVER!</h3>
                <h4>{this.state.score}</h4>
                <p>Enter your name and press the SPACE BAR to log your score</p>
                <input placeholder="enter your name" onKeyDown={()=>{this.logScore()}}/>
            </div>
            <div className="row">
                {this.state.countDown}
                <img src="/assets/hurry.png" className={this.state.picclass}/>
            </div>
            <div className="row">
                <div className="score">
                    {this.state.score}
                </div>
            </div>
            <div>
                <DisplayWord word={this.state.word} stage={this.state.stage}/>
            </div>
            <div className = "input-holder">
                <Input onSpaceHandler={this.onSpaceHandler} start={this.state.start} startgame={this.startGame}/>
            </div>
            <div>
                <img src={this.state.url}/>
            </div>
        </div>
         );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  console.log("DOM LOADED")
  ReactDOM.render(
    <Main />,
    document.body.appendChild(document.createElement('div')),
  )
})