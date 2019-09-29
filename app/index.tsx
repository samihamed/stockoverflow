import React from "react";
import ReactDOM from "react-dom";

import Rainbow from "./components/Rainbow/Rainbow.component";
import Card from "./components/Card/Card.component";
import News from "./components/News/News.component";
import Setup from "./components/Setup/Setup.component";

import logo from "./assets/logo.png";

import "./index.scss";

interface AppProps {}
interface AppState {
  stockList: Array<string>;
}

class App extends React.Component<AppProps, AppState> {
  constructor(props) {
    super(props);

    this.state = {
      stockList: [""]
    };

    this.updateStocks = this.updateStocks.bind(this);
  }

  componentDidMount() {
    const hasStocks = !!localStorage.getItem("stocks");

    if (hasStocks) this.updateStocks();
    else {
      localStorage.setItem(
        "stocks",
        ["Lululemon", "Enphase energy", "Wayland group", "Scout24"]
          .map(stock => stock + "+stock")
          .map(stock => stock.replace(" ", "+"))
          .join(" ")
      );
    }
  }

  updateStocks() {
    const stockList = localStorage
      .getItem("stocks")
      .split(" ")
      .map(it => {
        var find = "\\+";
        var re = new RegExp(find, "g");
        return it.replace(re, " ");
      });
    this.setState({ stockList });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="App-header-logo">
            <img className="App-logo" src={logo} />
            <h1 className="title-light">
              stock <span className="title-heavy">overflow</span>
            </h1>
          </div>
          <div className="App-header-user">
            <a
              className="secondary"
              href="https://www.samihamed.io"
              target="_blank"
            >
              Sami Hamed
            </a>
            <a
              className="tertiary"
              href="https://www.github.com/samihamed"
              target="_blank"
            >
              Github
            </a>
            <a
              className="primary"
              href="https://linkedin.com/in/samihamed"
              target="_blank"
            >
              Linkedin
            </a>
            <a
              className="primary"
              href="https://www.xing.com/profile/Sami_Hamed5"
              target="_blank"
            >
              Xing
            </a>
          </div>
        </div>

        <Rainbow />

        <div className="App-body">
          {// TODO: Add condition by evaluating AlphaVantage stockd data
          true ? (
            <Card>
              <h1>Moo!</h1>
              <p>No portfolio data to display</p>
              <Setup update={this.updateStocks} />
            </Card>
          ) : (
            <Card>
              <h1>Rawr!</h1>
              <p>Today's not your day!</p>
            </Card>
          )}

          <div className="stock-list">
            {this.state.stockList.map(stock => {
              return (
                <Card key={stock} classes="width-25">
                  <h3>News</h3>
                  <News update={this.updateStocks} query={stock} />
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
