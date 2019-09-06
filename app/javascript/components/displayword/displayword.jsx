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
                        array.push(alphabets.link)
                    }
                })

            });
        }

        if (array.length > 0) {
            let classtype = ""
            if(this.props.stage === 1){
                classtype = "alphabets"
            }else if(this.props.stage === 2){
                classtype = "alphabets"
            }else if(this.props.stage === 3){
                classtype = "alphabets-slow"
            }else if(this.props.stage === 4){
                classtype = "alphabets-med"
            }else if(this.props.stage === 5){
                classtype = "alphabets-fast"
            }

            imageDisplay = array.map((image, index) => {
                return <img src={image} className={classtype} key={index}/>
            })
        }


        return(
            <div>
                <div className="img-holder">{imageDisplay}</div>
            </div>
            )
    }
}