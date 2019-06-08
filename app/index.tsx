import React from 'react'
import ReactDOM from 'react-dom'
import logo from './assets/logo.png'
import './index.scss'
import './styles/typography.scss'

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img className="App-logo" src={logo}/>
                    <h1 className="title-light">stock <span className="title-heavy">overflow</span></h1>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))