import React from 'react'
import './FolderSectionNV.css'
import NotefulContext from '../NotefulContext'

export default class FolderSectionNV extends React.Component{
    static contextType = NotefulContext
    getFolderName(){
      let folderId =  this.context.notes.find(current => {
            return current.id === this.props.match.params.noteId
        }).folderId
        return this.context.folders.find(current => {
            return current.id === folderId
        }).name
    }
    render(){
        let folderName = this.getFolderName()
        return <section className="folder-section">
            <div onClick={() => this.props.history.goBack()} className="back-button">
                Go back
            </div>
            <h2>
                {folderName}   
            </h2>
        </section>
    }
}