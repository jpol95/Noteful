import React from 'react'
import Note from '../Note/Note'
import './NoteView.css'

export default class NoteView extends React.Component{
    
    getNote(){
       return this.props.notes.find(current => current.id === this.props.match.params.noteId)
    }

    render(){
    let currentNote = this.getNote()
   return  <section className="note-section">
            <Note name={currentNote.name} noteId={currentNote.id} />
            <div className="note-contents">
                <p>{currentNote.description}</p>
            </div>
        </section>
    }
}