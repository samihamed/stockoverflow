import React, { Component } from 'react'
import './Card.component.scss'

interface CardProps {
    classes?: string
}

export default class Card extends Component<CardProps> {
    render() {
        return (
            <div className={ 'card ' + this.props.classes}>
                { this.props.children }
            </div>
        )
    }
}