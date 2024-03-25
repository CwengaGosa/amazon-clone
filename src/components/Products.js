import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div>
      <h1>Products Page</h1>
      <ul>
        <li>
          <Link to="/products/01">Poduct 1</Link>
        </li>
        <li>
          <Link to="/products/02">Poduct 2</Link>
        </li>
        <li>
          <Link to="/products/03">Poduct 3</Link>
        </li>
      </ul>
    </div>
  );
};

export default Products;
