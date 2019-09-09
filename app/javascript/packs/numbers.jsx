import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

export default class Numbers extends React.Component{
    render(){
        return(<div>Numbers Lesson</div>)
    }
    }


document.addEventListener('DOMContentLoaded', () => {
  console.log("DOM LOADED")
  ReactDOM.render(
    <Numbers />,
    document.body.appendChild(document.createElement('div')),
  )
})