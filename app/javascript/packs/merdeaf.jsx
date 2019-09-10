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
            divclass: "hide",
            scoreclass: "hide",
            picclass:"hide",
            timerclass: "hide",
            scoringclass: "hide",
            inputclass: "hide",
            holderclass: "hide",
            name: "",
            score : 0,
            stage : 1,
            countDown: 45,
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
        }
    }

    timer = () => {
        this.interval = setInterval(() => {
            this.setState(prevState => ({
                countDown: prevState.countDown - 1,
            }), () => {
                if(this.state.countDown === 10){
                    this.setState({picclass: "show-div", timerclass: "urgent timer countdown"})
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
        this.setState({start: false, countDown: 45, timerclass: "hide", picclass: "hide", holderclass:"hide", url: "/assets/main.png"})
        if(this.state.stage < 5){
            let newStage = this.state.stage + 1;
            this.setState({stage: newStage, divclass: "level"})
        }else if(this.state.stage === 5){
            this.setState({scoreclass: "final", url: "/assets/hooray.png", picclass: "hide", inputclass: "hide", scoringclass: "hide"})
        }
    }

    startGame(){
        this.setState({start: true, buttonclass: "hide", divclass: "hide", picclass: "hide", timerclass:"timer countdown", inputclass: "input-holder", scoringclass: "col-11 score", holderclass: "show"});
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
                    this.setState({word: this.state.one[0], score: newScore, inputclass: "input-holder"});
                    console.log(this.state.one)
                }else if (this.state.stage === 2){
                    this.state.two.shift();
                    let newScore = this.state.score + 12;
                    this.setState({word: this.state.two[0], score: newScore, inputclass: "input-holder"});
                    console.log(this.state.two)
                }else if (this.state.stage === 3){
                    this.state.three.shift();
                    let newScore = this.state.score + 14;
                    this.setState({word: this.state.three[0], score: newScore, inputclass: "input-holder"});
                    console.log(this.state.three)
                }else if (this.state.state === 4){
                    this.state.four.shift();
                    let newScore = this.state.score + 16;
                    this.setState({word: this.state.four[0], score: newScore, inputclass: "input-holder"});
                    console.log(this.state.four)
                }else{
                    this.state.five.shift();
                    let newScore = this.state.score + 18;
                    this.setState({word: this.state.five[0], score: newScore, inputclass: "input-holder"});
                    console.log(this.state.five)
                }
                if (this.state.url === "/assets/applause.png" || this.state.url === "/assets/main.png"){
                    this.setState({url:"/assets/good.png"});
                }else{
                    this.setState({url:"/assets/applause.png"})
                }

            }else{
                this.setState({url: "/assets/alamak.png", inputclass: "yow input-holder"})
                if(this.state.score > 0 && this.state.start === true){
                    let newScore = this.state.score - 5;
                    this.setState({score: newScore})
                }
            }
        }
    }

  render(){
    return(
        <div className="container-fluid">
            <h1 className="game-title">type TYPE <b>TYPE!!!</b></h1>
            <h5 className={this.state.buttonclass}>Read the fingerspell alphabets and key in the word. Hit the SPACE BAR after each word.</h5>
            <h5 className={this.state.buttonclass}>There are a total of 5 rounds with 45 seconds each!</h5>
            <div className="game-title">
                <button className={this.state.buttonclass} onClick={()=>{this.startGame()}}>Start game!</button>
            </div>

            <div className="msg-holder">
                <div className={this.state.divclass}>
                    End of level! Press the SPACE BAR to start level {this.state.stage}!
                </div>
                <div className={this.state.scoreclass}>
                    <h3>GAME OVER!</h3>
                    <h4>{this.state.score}</h4>
                    <p>Enter your name and press the SPACE BAR to log your score</p>
                    <input placeholder="enter your name" onKeyDown={()=>{this.logScore()}}/>
                </div>
            </div>

            <div className={this.state.timerclass}>
                <div className="col-6 seconds">
                    <img src="/assets/hurry.png" className={this.state.picclass} height='100px'/>
                    {this.state.countDown}s
                </div>
                <div className="col-6 hurry">
                    <img src="/assets/hurry.png" className={this.state.picclass} height='100px'/>
                </div>
            </div>

            <div className="row">
                <div className={this.state.scoringclass}>
                    <div>
                        Score:
                    </div>
                    <div className="score-holder">
                        {this.state.score}
                    </div>
                </div>
            </div>
            <div className={this.state.holderclass}>
                <DisplayWord word={this.state.word} stage={this.state.stage}/>
            </div>
            <div className = {this.state.inputclass}>
                <Input onSpaceHandler={this.onSpaceHandler} start={this.state.start} startgame={this.startGame}/>
            </div>
            <div className = "merdeaf-holder">
                <img src={this.state.url} height='200px'/>
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