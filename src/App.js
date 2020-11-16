import "./App.css";
import React, { Component } from "react";
import { Route } from "react-router-dom";
import Header from "./Header/Header";
import FolderSection from "./FolderSection/FolderSection";
import NoteView from "./NoteView/NoteView";
import NoteSection from "./NoteSection/NoteSection";
import FolderSectionNV from "./FolderSectionNV/FolderSectionNV";
import NotefulContext from "./NotefulContext";
import AddFolder from "./AddFolder/AddFolder";
import AddNote from "./AddNote/AddNote";
// import items from './dummy_store'

class App extends Component {
  state = {
    folders: [],
    notes: [],
  };

  deleteNote = (noteId) => {
    this.setState({
      ...this.state,
      notes: this.state.notes.filter((current) => current.id !== noteId),
    });
  };

  addFolder = (folder) => {
    let folders = [...this.state.folders, folder];
    this.setState({ ...this.state, folders });
  };

  addNote = (note) => {
    let notes = [...this.state.notes, note];
    this.setState({ ...this.state, notes });
  };
  getNotesAndFolders() {
    let error;
    fetch(`http://localhost:9090/folders`)
      .then((res) => {
        if (!res.ok) error = { code: res.status };
        return res.json();
      })
      .then((data) => {
        if (error) {
          error.message = data.message;
          return Promise.reject(error);
        }
        this.setState({ ...this.state, folders: data });
      });
    fetch(`http://localhost:9090/notes`)
      .then((res) => {
        if (!res.ok) error = { code: res.status };
        return res.json();
      })
      .then((data) => {
        if (error) return Promise.reject(error);
        let newState = { ...this.state, notes: data };
        this.setState(newState);
      });
  }

  // componentDidUpdate(){
  // this.getNotesAndFolders()
  // }

  componentDidMount() {
    this.getNotesAndFolders();
  }

  component;
  render() {
    return (
      <NotefulContext.Provider
        value={{
          folders: this.state.folders,
          notes: this.state.notes,
          deleteNote: this.deleteNote,
          addFolder: this.addFolder,
          addNote: this.addNote,
        }}
      >
        <>
          <Header />
          <main>
            <Route exact path="/" component={FolderSection} />
            <Route exact path="/" component={NoteSection} />
            <Route exact path="/folder/:folderId" component={FolderSection} />
            <Route exact path="/folder/:folderId" component={NoteSection} />
            <Route exact path="/note/:noteId" component={FolderSectionNV} />
            <Route exact path="/note/:noteId" component={NoteView} />
            <Route exact path="/add-folder" component={FolderSection} />
            <Route exact path="/add-folder" component={AddFolder} />
            <Route exact path="/add-note" component={FolderSection} />
            <Route exact path="/add-note" component={AddNote} />
          </main>
        </>
      </NotefulContext.Provider>
    );
  }
}
export default App;
