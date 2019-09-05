import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import RandomWords from 'random-words'

export default class DisplayWord extends React.Component{
    constructor(){
        super();
        this.state = {
            alphabets : []
        };
    }

    componentDidMount() {
        this.getAlphabets();
    }

    getAlphabets() {
        fetch('/games/merdeaf.json')
        .then(res=>res.json())
        .then(result=>this.setState({alphabets: result}));
    }

    render(){
        let word = this.props.word;
        let letters = word.split("");
        let array = [];
        let imageDisplay = ""

        if (this.state.alphabets[0] !== undefined) {
            let splitword = letters.map((letter, index)=>{
                let splitalphabets = this.state.alphabets.map(alphabets => {
                    if(alphabets.name.toLowerCase() === letter){
                        console.log(alphabets.link);
                        array.push(alphabets.link)
                    }
                })

            });
        }

        if (array.length > 0) {
            imageDisplay = array.map(image => {
                return <img src={image} />
            })
        }


        return(
            <div>
                <div>{imageDisplay}</div>
                <button>Start Game</button>
            </div>
            )
    }
}