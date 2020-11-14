import { render } from '@testing-library/react'
import React from 'react'

export default class FolderError extends React.Component{
constructor(props){
    super(props)
}
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
