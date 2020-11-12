import React, { Component } from "react";
import FolderItem from '../FolderItem/FolderItem'
import './FolderSection.css'
import NotefulContext from '../NotefulContext'
import {Link} from 'react-router-dom'
import FolderError from '../FolderError/FolderError'

export default class FolderSection extends React.Component {
    // if the match name === the folder name make that highlighted
    static contextType = NotefulContext
  makeFolders() {
    return this.context.folders.map((current, index) => {
      return (
        <FolderError key={index}><FolderItem  key={index} folderId={current.id} name={current.name} /></FolderError>
      );
    });
  }

  render() {
    return <section className="folder-section">
        {this.makeFolders()}
        <Link to="/add-folder" className="add-folder">
          Add Folder       
        </Link>
        </section>;
  }
}
