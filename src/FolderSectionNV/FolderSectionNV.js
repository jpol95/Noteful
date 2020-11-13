import React from 'react'
import './FolderSectionNV.css'
import NotefulContext from '../NotefulContext'

export default class FolderSectionNV extends React.Component{
    static contextType = NotefulContext
    getFolderName(){
        console.log(this.context)
      let folderId =  this.context.notes.find(current => {
            return current.id == this.props.match.params.noteId
        }).folderId
        let folder =  this.context.folders.find(current => {
            return current.id === folderId
        })
        return folder.name
    }
    render(){
        let folderName = this.getFolderName()
        return <section className="folder-sectionnv">
            <div onClick={() => this.props.history.goBack()} className="back-button">
                Go back
            </div>
            <h2>
                {folderName}   
            </h2>
        </section>
    }
}