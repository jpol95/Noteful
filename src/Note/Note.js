import React from 'react'
import './Note.css'
import { NavLink } from 'react-router-dom'

export default class Note extends React.Component{
    render(){
        console.log(this.props)  
        return <NavLink to={`notes/${this.props.noteId}`}className="note">
                <p className="title"> {this.props.name} </p>
                <span className="bottom-elements">
                    <p className="date">Date modified on...</p>
                    <div className="delete-button">Delete</div>
                </span>
                </NavLink>

    }
}