import React, { Component } from "react";
import NewsItems from "./NewsItems";

export class News extends Component {
  render() {
    return (
      <div className="container my-3">
        <h2>NewMonkey- Top Headlines</h2>
        <div className="row">
          <div className="col-md-4">
            <NewsItems title="myTitle" description="myDescription" imgUrl="https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg"  />
          </div>
          <div className="col-md-4">
            <NewsItems title="myTitle" description="myDescription" />
          </div>
          <div className="col-md-4">
            <NewsItems title="myTitle" description="myDescription" />
          </div>
        </div>
      </div>
    );
  }
}

export default News;
