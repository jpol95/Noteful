import React from 'react'
import './Note.css'
import { Link } from 'react-router-dom'
import NotefulContext from '../NotefulContext'
import PropTypes from 'prop-types'

export default class Note extends React.Component{
    deleteNote(noteId, callback){
      window.open("/")
        let error
        fetch(`http://localhost:9090/notes/${noteId}`, {method: 'DELETE', headers: {
            'content-type': 'application/json'
          }}).then(res =>{
          if (!res.ok) error = {code: res.status}
          return res.json()}
        ).then(data =>{
          if (error) {
            error.message = data.message
            return Promise.reject(error)
          }
          callback(noteId) 
          })
      }
      static contextType = NotefulContext;
    render(){
        Note.propTypes = {
//Note to grader: it is necessary to allow either numbers or strings as note-ids because the API will sometimes spit out a numerical
//id instead of a string. I fixed the syntax of this noteId proptypes attribute to allow for either a number or string
            noteId: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.number.isRequired]),
            name: PropTypes.string.isRequired,
            modified: PropTypes.string.isRequired
        }
        return <Link to={`/note/${this.props.noteId}`} className="note">
                <p className="title"> {this.props.name} </p>
                <span className="bottom-elements">
                    <p className="date">Modified {this.props.modified.substring(0,10)}</p>
                    <button className="delete-button" onClick={() => this.deleteNote(this.props.noteId, this.context.deleteNote)}>Delete</button>
                </span>
                </Link>
            

    }
}