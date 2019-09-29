import React, { Component } from "react";
import "./Setup.component.scss";
import { API } from "../../api/api";

interface SetupProps {
  update: any;
}
interface SetupState {
  stock: string;
  update?: any;
}

export default class Setup extends Component<SetupProps, SetupState> {
  constructor(props) {
    super(props);

    this.state = {
      stock: "",
      update: props.update
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e: { target: { value: any } }) {
    this.setState({ stock: e.target.value });
  }

  async handleSubmit(e) {
    e.preventDefault();

    // TODO: Add validation
    const newItem = {
      query: this.state.stock
    };

    const response = await fetch(API.news, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newItem)
    }).then(response => response.json());

    if (!!response) {
      const querifiedStock = this.state.stock.replace(" ", "+") + "+stock";
      const stockList = localStorage.getItem("stocks");
      const newStockList = stockList + " " + querifiedStock;

      localStorage.setItem("stocks", newStockList);
      this.state.update();
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="setup-form">
          <input
            id="new-stock"
            onChange={this.handleChange}
            className="setup-input"
            value={this.state.stock}
          />

          <button className="submit-button">SAVE</button>
        </form>
      </div>
    );
  }
}
