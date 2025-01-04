import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const SingleFoodCategoryV3 = ({ data }) => {
  const { thumb, rating, review, oldPrice, newPrice, name, btnText, url } =
    data;

  return (
    <>
      <div className="food-menu-style-three">
        <div className="thumb">
          <img src={`assets/img/menu/${thumb}`} alt="Image Not Found" />
          <div className="d-flex">
            <div className="price">
              <span>
                <del>HKD {oldPrice}</del> HKD {newPrice}
              </span>
            </div>
          </div>
        </div>
        <div className="info">
          <h4>
            <Link to={`${"/" + url}`}>{name}</Link>
          </h4>
        </div>
      </div>
    </>
  );
};

export default SingleFoodCategoryV3;
