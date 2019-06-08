import React from 'react'
import ReactDOM from 'react-dom'
import Rainbow from './components/Rainbow/Rainbow.component'
import logo from './assets/logo.png'

import './index.scss'

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img className="App-logo" src={logo}/>
                    <h1 className="title-light">stock <span className="title-heavy">overflow</span></h1>
                </div>

                <Rainbow/>

                <div className="App-body">

                    <p>Now, this is a story all about how. My <a href="https://static1.squarespace.com/static/54ff0211e4b0331c7906899c/t/5bd327dfe2c4839823bb519f/1540564999452/life-lessons-fresh-prince-of-bel-air.jpg?format=1500w">life got flipped</a>-turned upside down.</p>
                
                </div>

            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))