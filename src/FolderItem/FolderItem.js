import React from 'react'
import './FolderItem.css'
import { NavLink } from 'react-router-dom'

export default class FolderItem extends React.Component{
    render(){
        let URL = `/folder/${this.props.folderId}`
        return <NavLink to={URL}  className="folder">
        {this.props.name}
        </NavLink>
    }
}