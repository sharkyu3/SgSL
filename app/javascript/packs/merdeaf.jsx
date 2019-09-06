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
            name: "",
            score : 0,
            stage : 1,
            timer : 60,

            one : RandomWords({exactly: 60, min: 3, maxLength: 5}),
            two : RandomWords({exactly: 60, min: 4, maxLength: 9}),
            three : RandomWords({exactly: 60, min: 3, maxLength: 6}),
            four : RandomWords({exactly: 60, min: 4, maxLength: 9}),
            five : RandomWords({exactly: 60, min: 5, maxLength: 10}),

            word: ""
        };
        this.onSpaceHandler = this.onSpaceHandler.bind(this)
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

    onSpaceHandler(){
        if (event.key === " "){
            if(this.state.word === event.target.value){
                console.log("score points!")
                let newScore = this.state.score + 10;
                this.setState({score: newScore})
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
    console.log(this.state.word);
    if(this.state.stage === 1){
        var word = this.state.one[0];
    }else if (this.state.stage === 2){
        var word = this.state.two[0];
    }else if (this.state.stage === 3){
        var word = this.state.three[0];
    }else if (this.state.state === 4){
        var word = this.state.four[0];
    }else{
        var word = this.state.five[0];
    }

    return(
        <div className="container">
            <h1 className="game-title">Swim Merdeaf Swim!</h1>
            <div className="row">
                <div className="score">
                    {this.state.score}
                </div>
            </div>
            <div className="row">
                <DisplayWord word={word}/>
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