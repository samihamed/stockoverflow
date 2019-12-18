import React, { Component } from 'react'
import './InputField.scss'

interface InputFieldProps {
    placeholder: string
}

export default class InputField extends Component<InputFieldProps> {
    render() {
        return (
            <div className="InputFieldContainer">
                <input className="InputField" placeholder={this.props.placeholder}/>
            </div>
        )
    }
}