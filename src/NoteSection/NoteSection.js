import React from 'react'
import Note from '../Note/Note'
import './NoteSection.css'
import NotefulContext from '../NotefulContext'
import {Link} from 'react-router-dom'

export default class NoteSection extends React.Component{
    static contextType = NotefulContext
    makeMap(){
        return this.context.notes.filter((current) =>{
            return current.folderId === this.props.match.params.folderId || this.props.match.params.folderId === undefined})
            .map((current, index) => { 
            return <Note key={index} date={current.date} noteId={current.id} name={current.name} folderId={current.folderId}/>
          
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