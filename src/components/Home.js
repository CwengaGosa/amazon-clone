import React from "react";
import "./Home.css";
import Products from "./Products";

const Home = () => {
  return (
    <div className="home">
      <div className="home-container">
        <img
          src="https://m.media-amazon.com/images/I/61lJ3xlQX2L._SX3000_.jpg"
          alt="NewYear banner"
          className="home-image"
        />
        <Products />
      </div>
    </div>
  );
};

export default Home;
