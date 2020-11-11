import React from 'react'
import './FolderSectionNV.css'

export default class FolderSectionNV extends React.Component{
    render(){
        return <section className="folder-section">
            <div onClick={() => this.props.history.goBack()}className="back-button">
                Go back
            </div>
            <h2>
                Folder 3    
            </h2>
        </section>
    }
}