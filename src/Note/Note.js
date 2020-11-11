import React from 'react'
import './Note.css'
import { Link } from 'react-router-dom'
import NotefulContext from '../NotefulContext'

export default class Note extends React.Component{
    deleteNote(noteId, callback){
        let error
        fetch(`http://localhost:9090/notes/${noteId}`, {method: 'DELETE', headers: {
            'content-type': 'application/json'
          }}).then(res =>{
              console.log(res)
          if (!res.ok) error = {code: res.status}
          return res.json()}
        ).then(data =>{
          if (error) {
            error.message = data.message
            return Promise.reject(error)
          }
          if (this.props.history.location.pathname !== "/"){
              console.log("hello")
          this.props.history.push("/")}
          callback(noteId)   
          })
      }
      static contextType = NotefulContext;
    render(){
        // console.log(this.props)
        return <Link to={`/note/${this.props.noteId}`} className="note">
                <p className="title"> {this.props.name} </p>
                <span className="bottom-elements">
                    <p className="date">Date modified on...</p>
                    <Link className="delete-button" onClick={() => this.deleteNote(this.props.noteId, this.context.deleteNote)}>Delete</Link>
                </span>
                </Link>

    }
}