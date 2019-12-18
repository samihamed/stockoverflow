import React, { Component } from 'react'
import logo from '../../assets/bull.png'
import './Logo.scss'

export default class Logo extends Component {
    render() {
        return (
            <div className="LogoContainer">
                <img className="Logo" src={logo}/>
            </div>
        )
    }
}