import React, { useState, useEffect } from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from 'react-infinite-scroll-component';
// import { render } from "@testing-library/react";

const News = (props) => {

  const [articles, setArticles] = useState([]);
  const [loading, setloading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  
  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setloading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    // console.log(parsedData);
    
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setloading(false);
    
    props.setProgress(100);
  };
  
  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)}-NewsMonkey`; 
    updateNews();
    // eslint-disable-next-line
  },[]);

  const handleNextClick = async () => {
    // console.log("Next button is clicked");
    // if (
    //   !(
    //     page + 1 >
    //     Math.ceil(totalResults / props.pageSize)
    //   )
    // ) {
    //   let url = `https://newsapi.org/v2/top-headlines?country=${
    //     props.country
    //   }&category=${
    //     props.category
    //   }&apiKey=8faaf51e8507403bbf60132dd3df1330&page=${
    //     page + 1
    //   }&pageSize=${props.pageSize}`;
    //  setloading(true);
    //   let data = await fetch(url);
    //   let parsedData = await data.json();
    //   // console.log(parsedData);
    //   setArticles(parsedData.articles);
    //   setloading(false);
    //   setPage(page + 1);
    // }

    setPage(page + 1);
    updateNews();
  };

  const handlePrevClick = async () => {
    // console.log("Previous button is clicked");

    // let url = `https://newsapi.org/v2/top-headlines?country=${
    //   props.country
    // }&category=${props.category}&apiKey=8faaf51e8507403bbf60132dd3df1330&page=${
    //   page - 1
    // }&pageSize=${props.pageSize}`;
    // setloading(true);
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // // console.log(parsedData);
    // setArticles(parsedData.articles);
    //   setloading(false);
    //   setPage(page - 1);

    setPage(page - 1);
    updateNews();
  };

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=e8a6c689d3d24e5f812d744aa05f5b59&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page+1);
    let data = await fetch(url);
    let parsedData = await data.json(); 
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };

  return (
    <div className="container my-5">
      <h1 className="text-center my-5">
        NewsMonkey- Top {capitalizeFirstLetter(props.category)} Headlines
      </h1>


     {loading && <Spinner />}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
          scrollableTarget="scrollableDiv"
        >
          <div className="container">
            <div className="row">
              {articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItems
                      title={element.title ? element.title : ""}
                      description={
                        element.description ? element.description : ""
                      }
                      imgUrl={element.urlToImage}
                      newsUrl={element.url}
                      author={element.author ? element.author : "Unknown"}
                      date={
                        element.publishedAt ? element.publishedAt : "Not Known"
                      }
                      source={element.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll> 

      <div className="container d-flex justify-content-between">
        <button
          disabled={page <= 1}
          type="button"
          className="btn btn-dark"
          onClick={handlePrevClick}
        >
          &laquo; Previous
        </button>
        <button
          disabled={page + 1 > Math.ceil(totalResults / props.pageSize)}
          type="button"
          className="btn btn-dark"
          onClick={handleNextClick}
        >
          Next &raquo;
        </button>
      </div>
    </div>
  );
};

News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}

export default News
