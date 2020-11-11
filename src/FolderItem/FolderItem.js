import React from 'react'
import './FolderItem.css'
import { NavLink } from 'react-router-dom'

export default class FolderItem extends React.Component{
    render(){
        let URL = this.props.folderId
        console.log(this.props)
        if (this.props.match.params.folderId == undefined) URL = `folder/${URL}`
        return <NavLink to={URL}  className="folder">
        {this.props.name}
        </NavLink>
    }
}