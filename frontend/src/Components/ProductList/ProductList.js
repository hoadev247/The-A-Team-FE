import React from "react";
import "./ProductList.css";

const ProductList = ({ title, products, type }) => {
  return (
    <div className={`product-list ${type}`}>
      <h2 className="product-list-title">{title}</h2>
      <div className="product-list-grid">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
