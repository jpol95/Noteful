import React, { Component } from "react";
import FolderItem from '../FolderItem/FolderItem'
import './FolderSection.css'
import NotefulContext from '../NotefulContext'

export default class FolderSection extends React.Component {
    // if the match name === the folder name make that highlighted
    static contextType = NotefulContext
  makeFolders() {
    return this.context.folders.map((current, index) => {
      return (
        <FolderItem  key={index} folderId={current.id} name={current.name} />
      );
    });
  }

  render() {
    return <section className="folder-section">
        {this.makeFolders()}
        <button className="add-folder">
                    Add Folder
        </button>
        </section>;
  }
}
