import React from 'react'
import Note from '../Note/Note'
import './NoteSection.css'
import NotefulContext from '../NotefulContext'
import {Link} from 'react-router-dom'
import NoteError from '../NoteError/NoteError'

export default class NoteSection extends React.Component{
    static contextType = NotefulContext
    makeMap(){
        return this.context.notes.filter((current) =>{
            return current.folderId === this.props.match.params.folderId || this.props.match.params.folderId === undefined})
            .map((current, index) => { 
            return <NoteError key={index}><Note key={index} modified={current.modified} noteId={current.id} name={current.name} folderId={current.folderId}/></NoteError>
          
        })}
    
    render(){
        // console.log(this.props)
        return <section className="note-section">
            {this.makeMap()}
            <Link to="/add-note" className="add-note">
               Add Note
           </Link>
            </section>
    }
}