import React from 'react'
import Note from '../Note/Note'
import './NoteView.css'
import NotefulContext from '../NotefulContext'

export default class NoteView extends React.Component{
    
static contextType = NotefulContext
    getNote(){
       return this.context.notes.find(current => current.id === this.props.match.params.noteId)
    }

    render(){
    let currentNote = this.getNote()
   return  <section className="note-section">
            <Note history={this.props.history} name={currentNote.name} noteId={currentNote.id} />
            <div className="note-contents">
                <p>{currentNote.content}</p>
            </div>
        </section>
    }
}