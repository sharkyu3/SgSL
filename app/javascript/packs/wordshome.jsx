import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import WordView from '../components/wordview/wordview'

export default class Main extends React.Component{

    constructor(){
        super();
        this.state = {
            words: [],
            clicked: null,
        }
        this.onClickHandler = this.onClickHandler.bind(this)
    }

    componentDidMount(){
        this.getWords();
    }

    getWords() {
        fetch('/words.json')
        .then(res=>res.json())
        .then(result=>this.setState({words: result}));
    }

    onClickHandler(){
        this.setState({clicked: event.target.value})
    }

    render(){
        let allWords = "";

        if(this.state.words.length > 0){
            allWords = this.state.words.map((word, index) =>{
                return <button onClick={this.onClickHandler} className="mock-button" key={index} value={word.id}>{word.name}</button>
            })
        }

        return(
            <div className="container-fluid">
                <div className="row holder">
                    <h1 id="bank-title">Word Bank!</h1>
                </div>
                <div className="row">
                    <div className="col-3 wordsss">
                        {allWords}
                    </div>
                    <div className="col-9 rest">
                        <div className="row">
                            <WordView clicked={this.state.clicked} />
                        </div>
                        <div className="row">
                            <a href="http://www.sgslsignbank.org.sg" className="wblink" target="_blank">Visit the SgSL Word Bank</a>
                        </div>
                    </div>
                </div>

            </div>

            )
    }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Main />,
    document.body.appendChild(document.createElement('div')),
  )
})