import React from 'react'
import Note from '../Note/Note'
import './NoteView.css'
import NotefulContext from '../NotefulContext'
import NoteError from '../NoteLoadError/NoteLoadError'

export default class NoteView extends React.Component{
    
static contextType = NotefulContext
    getNote(){
       return this.context.notes.find(current => current.id == this.props.match.params.noteId)
    }

    render(){
    let currentNote = this.getNote()
   return  <section className="note-section">
            <NoteError><Note history={this.props.history} name={currentNote.name} modified={currentNote.modified} noteId={currentNote.id} /></NoteError>
            <div className="note-contents">
                <p>{currentNote.content}</p>
            </div>
        </section>
    }
}