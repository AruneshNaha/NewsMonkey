import image_not_found from "./image-not-found.jpg"

const NewsItem = (props) => {

    // let { title, description, imageUrl, newsUrl, publishedAt, author, source } =
    //   this.props;
    let d = new Date(props.publishedAt);
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
          <span className="badge rounded-pill bg-danger">{props.source}</span>
        </div>
        <img
          height={props.imageUrl ? "" : "160px"}
          width={props.imageUrl ? "" : "180px"}
          src={props.imageUrl ? props.imageUrl : image_not_found}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <p className="card-text">
            <small className="text-muted">
              By {props.author} at {d.toLocaleTimeString()} on{" "}
              {d.toLocaleDateString()}
            </small>
          </p>

          <a
            rel="noreferrer"
            href={props.newsUrl}
            target="_blank"
            className="btn btn-sm btn-primary"
          >
            Read more...
          </a>
        </div>
      </div>
    );
  }


export default NewsItem;
