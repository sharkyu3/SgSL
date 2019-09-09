import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

export default class Alphabets extends React.Component{

    constructor(){
        super();
        this.state = {
            info: []
        }
    }

    componentDidMount(){
        this.getURL();
        var video = document.querySelector("#videoElement");

        if (navigator.mediaDevices.getUserMedia) {
          navigator.mediaDevices.getUserMedia({ video: true })
            .then(function (stream) {
              video.srcObject = stream;
            })
            .catch(function (err0r) {
              console.log("Something went wrong!");
            });
        }
    }

    getURL(){
        fetch('/lessons/alphabets.json')
        .then(res=>res.json())
        .then(result=>this.setState({info: result}));
    }

    render(){
        let url = ""
        if (this.state.info !== undefined){
            url = this.state.info.link
        }

        return(
            <div>
                <h1>Alphabets Lesson</h1>
                <div className="video-container">
                    <iframe width="560" height="340" src={url}></iframe>
                </div>
                <div>
                    <video autoPlay="true" id="videoElement"></video>
                </div>
            </div>)
    }
}


document.addEventListener('DOMContentLoaded', () => {
  console.log("DOM LOADED")
  ReactDOM.render(
    <Alphabets />,
    document.body.appendChild(document.createElement('div')),
  )
})