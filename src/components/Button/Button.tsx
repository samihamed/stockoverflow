import React, { Component } from 'react'
import './Button.scss'

interface ButtonProps {
    label: string
    primary?: boolean
}

export default class Button extends Component<ButtonProps> {
    render() {
        return (
            <div className={`ButtonContainer ${!!this.props.primary ? 'ButtonPrimary' : ''}`}>
                <button className="Button">{this.props.label}</button>
            </div>
        )
    }
}