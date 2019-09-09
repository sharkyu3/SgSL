import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

export default class Numbers extends React.Component{

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
        fetch('/lessons/numbers.json')
        .then(res=>res.json())
        .then(result=>this.setState({info: result}));
    }

    render(){
        let url = ""
        if (this.state.info !== undefined){
            url = this.state.info.link
        }

        return(
            <div className="container-fluid">
                <h2>Learn numbers 1 to 20 in SgSL!</h2>
                <h6>Allow webcam access to practice alongside!</h6>
                <div className="row vids">
                    <div className="video-container col-6">
                        <iframe width="560" height="340" src={url}></iframe>
                    </div>
                    <div className="col-6">
                        <video autoPlay="true" id="videoElement"></video>
                    </div>
                </div>
            </div>)
    }
}


document.addEventListener('DOMContentLoaded', () => {
  console.log("DOM LOADED")
  ReactDOM.render(
    <Numbers />,
    document.body.appendChild(document.createElement('div')),
  )
})