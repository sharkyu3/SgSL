import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

export default class WordView extends React.Component{
    constructor(){
        super();
        this.state = {
            info: []
        };
    }

    componentDidMount(){
        var video = document.querySelector("#videoEl");
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

    componentDidUpdate(prevProps, prevState){
        console.log("checking for update")
        if(this.props.clicked !== prevProps.clicked){
            this.getURL()
        }
    }

    getURL(){
        var test = document.URL + "/" + this.props.clicked + ".json"
        fetch(test)
        .then(res=>res.json())
        .then(result=>this.setState({info: result}));
    }

    render(){

        let url = this.state.info.link
        return(
            <div className="container-fluid">
                <h2 id="word-holder">{this.state.info.name}</h2>
                <div className="row vids">
                    <div className="video-container col-6">
                        <img className= "gif" src={url}></img>
                    </div>
                    <div className="col-6">
                        <video autoPlay="{true}" id="videoEl"></video>
                    </div>
                </div>

            </div>)
    }
}