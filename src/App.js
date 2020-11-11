import './App.css';
import React, { Component } from "react";
import { Route } from 'react-router-dom'
import Header from './Header/Header'
import FolderSection from './FolderSection/FolderSection'
import NoteView from './NoteView/NoteView'
import items from './dummy_store'
import NoteSection from './NoteSection/NoteSection'
import FolderSectionNV from './FolderSectionNV/FolderSectionNV'




class App extends Component{
  state={
    folders: items.folders, notes: items.notes
  }

  render(){
    return <>
    <Header />
    <Route exact path="/" 
    render={props => {
      return <main>
      <FolderSection {...props} folders={this.state.folders}/>
      <NoteSection {...props} notes={this.state.notes}/>
      </main>
    }} /> 
    <Route exact path="/folder/:folderId" 
    render={props => {
      return <main>
      <FolderSection {...props} folders={this.state.folders}/>
      <NoteSection {...props} notes={this.state.notes}/>
      </main>
    }} />  
    <Route exact path="/note/:noteId" 
    render={props => {
      return <main>
      <FolderSectionNV {...props} notes={this.state.notes} folders={this.state.folders}/>
      <NoteView {...props} notes={this.state.notes}/>
      </main>
    }} />

    </>
  }
}
export default App;
