import React, { Component } from "react";

export class NewsItems extends Component {
  render() {
    let { title, description ,imgUrl,newsUrl} = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{width: "18rem"}}>
          <img src={!imgUrl?"https://images.cointelegraph.com/images/1200_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjMtMTAvOTM3MDJkOTktYWM5Ni00N2U5LWIyYTMtY2E2NDMwMjcxZjRlLmpwZw==.jpg":imgUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title} ...</h5>
            <p className="card-text">
              {description} ...
            </p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItems;
