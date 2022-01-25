import React, { Component } from "react";

export class NewsItem extends Component {
  image_not_found = require("./image-not-found.jpg");
  render() {
    let { title, description, imageUrl, newsUrl, publishedAt, author, source } =
      this.props;
    let d = new Date(publishedAt);
    return (
      <div className="card my-3">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        >
          <span className="badge rounded-pill bg-danger">{source}</span>
        </div>
        <img
          height={imageUrl ? "" : "160px"}
          width={imageUrl ? "" : "180px"}
          src={imageUrl ? imageUrl : this.image_not_found}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-muted">
              By {author} at {d.toLocaleTimeString()} on{" "}
              {d.toLocaleDateString()}
            </small>
          </p>

          <a
            rel="noreferrer"
            href={newsUrl}
            target="_blank"
            className="btn btn-sm btn-primary"
          >
            Read more...
          </a>
        </div>
      </div>
    );
  }
}

export default NewsItem;
