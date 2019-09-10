import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

export default class Alphabets extends React.Component{

    constructor(){
        super();
        this.state = {
            info: [],
            params: null
        }
    }

    componentDidMount(){
        this.setState({params: event.target.URL}, function() {
            this.getURL()
        })
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
        var test = this.state.params + ".json"
        fetch(test)
        .then(res=>res.json())
        .then(result=>this.setState({info: result}));
    }

    render(){
        let url = ""
        if (this.state.info.link !== undefined){
            url = this.state.info.link
        }

        return(
            <div className="container-fluid">
                <h2>{this.state.info.name}</h2>
                <h6>Allow webcam access to practice alongside!</h6>
                <div className="row vids">
                    <div className="video-container col-6">
                        <img className= "gif" src={url}></img>
                    </div>
                    <div className="col-6">
                        <video autoPlay="{true}" id="videoElement"></video>
                    </div>
                </div>
            </div>)
    }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Alphabets />,
    document.body.appendChild(document.createElement('div')),
  )
})