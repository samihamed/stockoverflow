import React, { Component } from "react";
import moment from "moment";

import "./News.components.scss";

import { NewsArticle } from "../../types/NewsArticle";

import noPreviewDefault from "../../assets/default.jpg";
import loading from "../../assets/loading.gif";
import close from "../../assets/close.png";
import { API } from "../../api/api";

interface NewsProps {
  query?: string;
  update?: Function;
}

interface NewsState {
  query: string;
  // TODO: Add types
  news: Array<NewsArticle>;
  topArticle?: NewsArticle;
  loading: boolean;
  update?: Function;
}

const NEWS_LIMIT = 15;

export default class News extends Component<NewsProps, NewsState> {
  constructor(props: NewsProps) {
    super(props);

    this.state = {
      query: props.query || "",
      news: [],
      loading: true
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(): void {
    this.getNews();
  }

  getNews() {
    // TODO: Get this from localStorage
    const query = this.state.query;

    fetch(API.news, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ query: query })
    })
      .then(response => response.json())
      .then(data => {
        if (!!data.articles) {
          this.setState({ topArticle: data.articles.slice(0, 1)[0] });
          this.setState({ news: data.articles.slice(1, NEWS_LIMIT) });
        }

        setTimeout(() => {
          this.setState({ loading: false });
        }, 1000);
      });
  }

  handleSubmit() {
    const stockList = localStorage.getItem("stocks");
    const newStockList = stockList
      .split(" ")
      .map(it => {
        var find = "\\+";
        var re = new RegExp(find, "g");
        return it.replace(re, " ");
      })
      .filter(stock => stock.indexOf(this.state.query) === -1);
    const toSave = newStockList
      .map(it => {
        var find = "\\ ";
        var re = new RegExp(find, "g");
        return it.replace(re, "+");
      })
      .join(" ");

    localStorage.setItem("stocks", toSave);
    this.state.update();
  }

  render() {
    return (
      <div>
        <div className="news-header">
          <h2>{this.state.query.replace("stock", "")}</h2>
          <form onSubmit={this.handleSubmit} className="setup-form">
            <button>
              <img className="close-button" src={close} />
            </button>
          </form>
        </div>

        {!this.state.loading ? (
          <div className="news-list">
            {!!this.state.topArticle ? (
              <div className="top-article">
                <div className="preview-picture">
                  <img
                    src={this.state.topArticle.urlToImage || noPreviewDefault}
                  />
                </div>
                {moment
                  .utc(this.state.topArticle.publishedAt)
                  .format("DD MM YYYY")}
                :
                <a href={this.state.topArticle.url} target="_blank">
                  {this.state.topArticle.title}
                </a>
              </div>
            ) : null}

            {this.state.news.map(article => {
              return (
                <span className="news-article" key={article.url}>
                  {moment.utc(article.publishedAt).format("DD MM YYYY")}:
                  <a href={article.url} target="_blank">
                    {article.title}
                  </a>
                </span>
              );
            })}

            {!this.state.topArticle && this.state.news.length === 0 ? (
              <h3>No news to show</h3>
            ) : null}
          </div>
        ) : (
          <img className="loading-indicator" src={loading} />
        )}
      </div>
    );
  }
}
