import React from 'react'
import Note from '../Note/Note'
import './NoteSection.css'
import NotefulContext from '../NotefulContext'

export default class NoteSection extends React.Component{
    static contextType = NotefulContext
    makeMap(){
        return this.context.notes.filter((current) =>{
            return current.folderId === this.props.match.params.folderId || this.props.match.params.folderId === undefined})
            .map((current, index) => { 
            return <Note  history={this.props.history} key={index} noteId={current.id} name={current.name} folderId={current.folderId}/>
          
        })}
    
    render(){
        // console.log(this.props)
        return <section className="note-section">
            {this.makeMap()}
            <div className="add-note">
               Add Note
           </div>
            </section>
    }
}