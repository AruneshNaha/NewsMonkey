import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0)

  // articles: this.article,
  //     loading: false,
  //     page: 1,


  // article = [];

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

    // document.title = `${this.capitalizeFirstLetter(
    //   props.category
    // )} - NewsMonkey`;

    const updateNews = async ()=> {
      props.setProgress(10);
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=5`; 
      setLoading(true)
      let data = await fetch(url);
      props.setProgress(30);
      let parsedData = await data.json()
      props.setProgress(70);
      setArticles(parsedData.articles)
      setTotalResults(parsedData.totalResults)
      setLoading(false)
      props.setProgress(100);

  }

  const fetchMoreData = async () => {   
    setPage(page+1) 
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=5`;
    let data = await fetch(url);
    let parsedData = await data.json()
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
  };

  useEffect(() => {
    updateNews();
    }, [])
  

  // async componentDidMount() {
  //   this.updateNews();
  // }

  // const handleNextClick = async () => {
  //   this.setState({ page: this.state.page + 1 });
  //   this.updateNews();
  // };

  // const handlePreviousClick = async () => {
  //   this.setState({ page: this.state.page - 1 });
  //   this.updateNews();
  // };
 
    return (
      <>
        <h2 className="text-center" style={{ margin: "35px 0px" }}>
          NewsMonkey - Top Headlines
        </h2>
        {/* <div className="text-center">
          
          Displaying page{" "}
          <span className="badge bg-primary">
            {!this.state.loading ? this.state.articles.length.toString() : 0}
          </span>{" "}
          results
        </div> */}
        {/* {this.state.loading && <Spinner />} */}
        {/* <div className="container d-flex justify-content-between">
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
        </div> */}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title}
                      description={
                        element.description
                          ? element.description
                          : "Know more about it by clicking on 'Read More...'"
                      }
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
        </InfiniteScroll>
      </>
    );
  }


News.defaultProps = {
  country: "in",
  pageSize: 5,
  category: "general",
  totalResults: 0,
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
