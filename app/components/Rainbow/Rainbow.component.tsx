import React, { Component } from 'react'
import './Rainbow.component.scss'

export default class Rainbow extends Component {
    render() {
        return (
            <div className="rainbow">
                <div className="color primary"></div>
                <div className="color accent-dark"></div>
                <div className="color accent"></div>
                <div className="color tertiary"></div>
                <div className="color secondary"></div>
            </div>
        )
    }
}