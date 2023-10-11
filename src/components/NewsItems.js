import React, { Component } from "react";

export class NewsItems extends Component {
  render() {
    let { title, description, imgUrl, newsUrl, author, date, source } =
      this.props;
    return (
      <div className="my-3">
        <div className="card">
          <img
            src={
              !imgUrl
                ? "https://images.cointelegraph.com/images/1200_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjMtMTAvOTM3MDJkOTktYWM5Ni00N2U5LWIyYTMtY2E2NDMwMjcxZjRlLmpwZw==.jpg"
                : imgUrl
            }
            className="card-img-top"
            alt="..."
          />
          <span
            className="position-absolute top-0 translate-middle badge rounded-pill bg-primary"
            style={{ left: "90%", zIndex: "1" }}
          >
            {source}
          </span>
          <div className="card-body">
            <h5 className="card-title">{title} ...</h5>
            <p className="card-text">{description} ...</p>
            <p className="card-text">
              <small className="text-body-secondary">
                By {author} on {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItems;
