import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 20,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  article = [];

  constructor() {
    super();
    console.log("I am a constructor");

    this.state = {
      articles: this.article,
      loading: false,
      page: 1,
    };
  }

  async updateNews(pageNo) {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5abf387760984519a04fa3761092d891&page=${this.state.page}&pageSize=20`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({ loading: false });

    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
  }

  async componentDidMount() {
    this.updateNews()
  }

  handleNextClick = async () => {
    // let url = `https://newsapi.org/v2/top-headlines?country=${
    //   this.props.country
    // }&category=${
    //   this.props.category
    // }&apiKey=5abf387760984519a04fa3761092d891&page=${
    //   this.state.page + 1
    // }&pageSize=20`;
    // this.setState({ loading: true });
    // let data = await fetch(url);
    // let parsedData = await data.json();

    // this.setState({
    //   page: this.state.page + 1,
    //   articles: parsedData.articles,
    //   loading: false,
    // });
    this.setState({page: this.state.page + 1})
    this.updateNews()
  };

  handlePreviousClick = async () => {
    // let url = `https://newsapi.org/v2/top-headlines?country=${
    //   this.props.country
    // }&category=${
    //   this.props.category
    // }&apiKey=5abf387760984519a04fa3761092d891&page=${
    //   this.state.page - 1
    // }&pageSize=20`;
    // this.setState({ loading: true });
    // let data = await fetch(url);
    // let parsedData = await data.json();

    // this.setState({
    //   page: this.state.page - 1,
    //   articles: parsedData.articles,
    //   loading: false,
    // });
    this.setState({page: this.state.page - 1})
    this.updateNews()
  };

  render() {
    return (
      <div className="container my-3">
        <h2 className="text-center" style={{ margin: "35px 0px" }}>
          NewsMonkey - Top Headlines
        </h2>
        <div className="text-center">
          Displaying page{" "}
          <span className="badge bg-primary">{!this.state.loading ? this.state.page : 0}</span> of{" "}
          {!this.state.loading ? <><span className="badge bg-dark text-light">
            {Math.ceil(this.state.totalResults / 20)}
          </span>{" "}</> : <></>}
          pages
        </div>
        {this.state.loading && <Spinner />}
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePreviousClick}
          >
            {" "}
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 > Math.ceil(this.state.totalResults / 20)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title}
                  description={element.description ? element.description : "Know more about it by clicking on 'Read More...'"}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  publishedAt={element.publishedAt}
                  author={element.author ? element.author : "Anonymous"}
                  source={element.source.name}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;
