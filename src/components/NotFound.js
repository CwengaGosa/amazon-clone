import React from "react";
import "./NotFound.css";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <Link to="/">
        <div className="img-top">
          <img
            src="https://images-na.ssl-images-amazon.com/images/G/01/error/title._TTD_.png"
            alt="not found message"
          />
        </div>
        <div>
          <img
            src="https://images-na.ssl-images-amazon.com/images/G/01/error/66._TTD_.jpg"
            alt="dog"
          />
        </div>
      </Link>
    </div>
  );
};

export default NotFound;
