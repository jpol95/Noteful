import React from 'react'
import Note from '../Note/Note'
import './NoteSection.css'

export default class NoteSection extends React.Component{
    makeMap(){
        return this.props.notes.filter((current) =>{
            return current.folderId == this.props.match.params.folderId || this.props.match.params.folderId == undefined})
            .map((current, index) => { 
            return <Note history={this.props.history} match={this.props.match} key={index} noteId={current.id} name={current.name} folderId={current.folderId}/>
          
        })}
    
    render(){
        console.log(this.props)
        return <section className="note-section">
            {this.makeMap()}
            <div className="add-note">
               Add Note
           </div>
            </section>
    }
}