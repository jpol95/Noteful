import React, { Component } from "react";
import FolderItem from '../FolderItem/FolderItem'
import './FolderSection.css'

export default class FolderSection extends React.Component {
    // if the match name === the folder name make that highlighted
  makeFolders() {
    return this.props.folders.map((current, index) => {
      return (
        <FolderItem  match={this.props.match} history={this.props.history}  key={index} folderId={current.id} name={current.name} />
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
