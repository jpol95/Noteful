
import React from 'react'

export default class FolderError extends React.Component{
state = {
    hasError: false
}
    static getDerivedStateFromError(error){
        return {hasError: true}
    }

    render() {
        if (this.state.hasError) return <h2> This folder's not available right now! </h2>
        return this.props.children
    }
}
