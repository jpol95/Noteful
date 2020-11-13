import React from 'react'
import './Note.css'
import { Link } from 'react-router-dom'
import NotefulContext from '../NotefulContext'
import PropTypes from 'prop-types'

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
          callback(noteId) 
          })
      }
      static contextType = NotefulContext;
    render(){
        // console.log(this.props)
        Note.propTypes = {
            noteId: PropTypes.number.isRequired || PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired
        }
        return <Link to={`/note/${this.props.noteId}`} className="note">
                <p className="title"> {this.props.name} </p>
                <span className="bottom-elements">
                    <p className="date">{this.props.date.substring(4,16)}</p>
                    <Link to="/" className="delete-button" onClick={() => this.deleteNote(this.props.noteId, this.context.deleteNote)}>Delete</Link>
                </span>
                </Link>

    }
}