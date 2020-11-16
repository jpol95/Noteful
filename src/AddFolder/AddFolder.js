import React from 'react'
import './AddFolder.css'
import NotefulContext from '../NotefulContext'
import FormError from '../FormError/FormError'


export default class AddFolder extends React.Component{
    static contextType = NotefulContext

    state = {
        name: {value: '', touched : false}
    }

    handleSubmit(e){
        let error
        e.preventDefault()
        let newFolder = JSON.stringify({name : this.state.name.value})
        fetch(`http://localhost:9090/folders/`, {method: 'POST', headers: {"content-type": "application/json"}, body: newFolder })
        .then(res =>{
           if (!res.ok){
               error = {code: res.status}
           } 
              return res.json()
            
        }).then(data =>{
            if (error) {
                error.message = data.message
                Promise.reject(error)
            }
            this.context.addFolder(data)
            this.props.history.push("/")
        })
    }
    handleUpdateName = (name) => {
        let newName = {value: name, touched: true}
        this.setState({...this.state, name:newName})
    }
    validateName = () => {
        if (this.state.name.value === '') return <p className="error">Name is required</p>
        if (this.state.name.value.length < 3) return <p className="error">Folder Name must be at last 3 letters</p>
    }
    render(){
        return(
            <FormError>
            <form className="folder-form" onSubmit ={e => this.handleSubmit(e)}>
                <h2>Add a folder</h2>
                <label htmlFor="folder-name">Folder Name (required)</label>
                <input id="folder-name" className="folder-name" type="text" onChange={(e) => this.handleUpdateName(e.target.value)}/>
                {this.state.name.touched && this.validateName()}
                <button disabled={this.validateName()} className="submit" type="submit">Submit</button>
            </form>
            </FormError>
        )

    }
}