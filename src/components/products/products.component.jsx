import React from "react";

import "./products.styles.scss";

import image from "../../assets/yarn.png";

function Image() {
  return (
    <img
      src={image}
      alt="yarn"
      style={{ width: "70px", height: "70px", margin: "0 10px" }}
    />
  );
}

function Price() {
  return (
    <div className="price">
      <p>Rs 250</p>
      <p>qty: 5</p>
      <p>In Stock</p>
    </div>
  );
}

function Container() {
  return (
    <div className="container">
      <div className="title">
        <h3>Colour Candels</h3>
      </div>
      <div className="images">
        <Image />
        <Image />
        <Image />
      </div>
      <Price />
      <div className="button">
        <button
          style={{
            border: "none",
            backgroundColor: "#2699fb",
            color: "white",
            padding: "10px",
          }}
        >
          Edit Product
        </button>
      </div>
    </div>
  );
}

function Products() {
  return (
    <div>
      <h1>Products</h1>
      <div className="products">
        <Container />
        <Container />
      </div>
    </div>
  );
}

export default Products;
