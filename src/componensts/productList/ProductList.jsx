import React from "react";
import Products from "../products/Products";
import "./ProductList.css";
import products from "../../data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Create & inspire.</h1>
        <p className="pl-desc">
          About Me It is a long established fact that a reader will be
          distracted by the readable content. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Products key={item.id} img={item?.img} link={item?.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
