import './App.css';
import React, { Component } from "react";
import { Route } from 'react-router-dom'
import Header from './Header/Header'
import FolderSection from './FolderSection/FolderSection'
import NoteView from './NoteView/NoteView'
import NoteSection from './NoteSection/NoteSection'
import FolderSectionNV from './FolderSectionNV/FolderSectionNV'
import NotefulContext from './NotefulContext'
import items from './dummy_store'

class App extends Component{
  state={
    folders:[], notes: []
  }

  deleteNote = (noteId) => {
    this.setState({...this.state, notes: this.state.notes.filter((current) => current.id !== noteId)})
  }


  getNotesAndFolders(){
    console.log("Am I mounting")
    let error
    fetch(`http://localhost:9090/folders`).then(res =>{
      if(!res.ok) error = {code: res.status}
      return res.json()
  }).then(data =>{
    if (error){ 
      error.message = data.message
      return Promise.reject(error)
    }
    this.setState({...this.state, folders: data})
  })
  fetch(`http://localhost:9090/notes`).then(res =>{
      if(!res.ok) error = {code: res.status}
      return res.json()
  }).then(data =>{
    console.log(data)
    if (error) return Promise.reject(error)
    let newState = {...this.state, notes: data}
    this.setState(newState)
  })
  }

  // componentDidUpdate(){
  // this.getNotesAndFolders()
  // }

  componentDidMount(){
    this.getNotesAndFolders()
  }

  component
  render(){
    return (
    <NotefulContext.Provider value={{folders: this.state.folders, notes: this.state.notes, deleteNote: this.deleteNote}}>
    <>
    <Header />
    <main>
    <Route exact path="/" component={FolderSection} />
    <Route exact path="/" component={NoteSection} />
    <Route exact path="/folder/:folderId" component={FolderSection} />
    <Route exact path="/folder/:folderId" component={NoteSection} />
    <Route exact path="/note/:noteId" component={FolderSectionNV} />
    <Route exact path="/note/:noteId" component={NoteView} />
    </main>  
    </>
    </NotefulContext.Provider>
    )}
}
export default App;
