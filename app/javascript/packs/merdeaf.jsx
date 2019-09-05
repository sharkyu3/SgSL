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
            totalScore : 0,
            roundScore : 0,
            lives : 5,
            stage : 1,
            timer : 60,

            one : RandomWords({exactly: 15, min: 3, maxLength: 5}),
            two : RandomWords({exactly: 15, min: 4, maxLength: 9}),
            three : RandomWords({exactly: 15, min: 3, maxLength: 6}),
            four : RandomWords({exactly: 15, min: 4, maxLength: 9}),
            five : RandomWords({exactly: 15, min: 5, maxLength: 10})
        };
    }

  render(){
    if(this.state.stage === 1){
        var link = this.state.one[0];
    }else if (this.state.stage === 2){
        var link = this.state.two[0];
    }else if (this.state.stage === 3){
        var link = this.state.three[0];
    }else if (this.state.state === 4){
        var link = this.state.four[0];
    }else{
        var link = this.state.five[0];
    }

    return(
        <div>
            <h1 className="game-title">Swim Merdeaf Swim!</h1>
            <DisplayWord word={link}/>
            <Input />
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