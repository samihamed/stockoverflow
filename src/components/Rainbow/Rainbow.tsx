import React, { Component } from 'react'
import './Rainbow.scss'

interface RainbowProps {
    stretch?: boolean
}

export default class Rainbow extends Component<RainbowProps> {
    render() {
        const stretch = !!this.props.stretch

        return (
            <div className={`rainbow ${!!stretch ? 'stretch' : 'null'}`}>
                <div className="color primary"></div>
                <div className="color accent-dark"></div>
                <div className="color accent"></div>
                <div className="color tertiary"></div>
                <div className="color secondary"></div>
            </div>
        )
    }
}