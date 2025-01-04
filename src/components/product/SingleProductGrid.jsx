import React from "react";
import { Link } from "react-router-dom";

const SingleProductGrid = ({ product }) => {
  const { thumb, badge, title, newPrice, oldPrice, btnText, productTag, url } =
    product;

  const newP = Math.floor(newPrice).toFixed(2);
  const oldP = Math.floor(oldPrice).toFixed(2);

  return (
    <>
      <li className="product">
        <div className="product-contents">
          <div className="product-image">
            <Link to={`${"/" + url}`}>
              <img src={`assets/img/shop/${thumb}`} alt="Product" />
            </Link>
          </div>
          <div className="product-caption">
            <h4 className="product-title">
              <Link to={`${"/" + url}`}>{title}</Link>
            </h4>
            <div className="price">
              {oldP && !isNaN(oldP) && (
                <span>
                  <del>HKD {oldP}</del>{" "}
                </span>
              )}
              <span>HKD {newP}</span>
            </div>
          </div>
        </div>
      </li>
    </>
  );
};

export default SingleProductGrid;
