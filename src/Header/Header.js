import { render } from '@testing-library/react'
import React from 'react'
import './Header.css'

export default class Header extends React.Component{
    render(){
        return <header>
                    <h1>Noteful</h1>
               </header>
    }
}