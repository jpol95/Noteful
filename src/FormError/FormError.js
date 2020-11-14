import React from 'react'

export default class FormError extends React.Component{
    constructor(props){
        super(props)
    }
    state = {
        hasError: false
    }
    static getDerivedStateFromError(error){
        return {hasError : true}
    }
    render(){
        if (this.state.hasError) return <h2>Whoops! This form is not available. Sorry</h2>
    
    return this.props.children
}
}