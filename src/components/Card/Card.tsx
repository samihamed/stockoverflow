import React, { Component } from 'react'
import './Card.scss'
import Rainbow from '../Rainbow/Rainbow'

interface CardProps {
    classes?: string,
    hasRainbow?: boolean
}

export default class Card extends Component<CardProps> {
    render() {
        return (
            <>
            
            { !!this.props.hasRainbow ? (<Rainbow stretch={false}/>) : null}
            
            <div className={ 'card ' + this.props.classes}>
                { this.props.children }
            </div>
            
            </>
        )
    }
}