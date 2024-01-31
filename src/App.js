import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Spinner from './components/Spinner';
import LoadingBar from "react-top-loading-bar";
import { useState } from "react";



const App =()=> {
  const pageSize = 6;
  const apiKey=process.env.REACT_APP_NEWS_API;   

  const [progress,setProgress]=useState(0);
 
    return (
      <>
        {/* // <div>
      //   <Navbar/>
      //   <News   pageSize={pageSize} country={"in"} category={"health"}/>
      // </div> */}

        <Router>
          <Navbar />
          <LoadingBar
            color="#f11946"
            progress={progress}
            height={3}
            
          />
          <Routes>
            <Route
              path="/"
              element={
                <News setProgress={setProgress} apiKey={apiKey} 
                  key="general"
                  pageSize={pageSize}
                  country={"in"}
                  category={"general"}
                />
              }
            />
            <Route
              path="/business"
              element={
                <News setProgress={setProgress} apiKey={apiKey} 
                  key="business"
                  pageSize={pageSize}
                  country={"in"}
                  category={"business"}
                />
              }
            />
            <Route
              path="/entertainment"
              element={
                <News setProgress={setProgress} apiKey={apiKey} 
                  key="entertainment"
                  pageSize={pageSize}
                  country={"in"}
                  category={"entertainment"}
                />
              }
            />
            <Route
              path="/general"
              element={
                <News setProgress={setProgress} apiKey={apiKey} 
                  key="general"
                  pageSize={pageSize}
                  country={"in"}
                  category={"general"}
                />
              }
            />
            <Route
              path="/health"
              element={
                <News setProgress={setProgress} apiKey={apiKey} 
                  key="health"
                  pageSize={pageSize}
                  country={"in"}
                  category={"health"}
                />
              }
            />
            <Route
              path="/science"
              element={
                <News setProgress={setProgress} apiKey={apiKey} 
                  key="science"
                  pageSize={pageSize}
                  country={"in"}
                  category={"science"}
                />
              }
            />
            <Route
              path="/sports"
              element={
                <News setProgress={setProgress} apiKey={apiKey} 
                  key="sports"
                  pageSize={pageSize}
                  country={"in"}
                  category={"sports"}
                />
              }
            />
            <Route
              path="/technology"
              element={
                <News setProgress={setProgress} apiKey={apiKey} 
                  key="technology"
                  pageSize={pageSize}
                  country={"in"}
                  category={"technology"}
                />
              }
            />
          </Routes>
        </Router>
      </>
    );
  
}
export default App;
