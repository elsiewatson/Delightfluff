import { HashLink as Link } from "react-router-hash-link";
import React from "react";

const SingleBlog2Column = ({ blog }) => {
  const {
    id,
    thumb,
    day,
    month,
    author,
    title,
    btnIcon,
    btnText,
    category,
    url,
  } = blog;

  return (
    <>
      <div className="home-blog-style-one-item">
        <Link to={`${"/" + url}`}>
          <img src={`/assets/img/blog/${thumb}`} alt="Thumb" />
        </Link>
        <div className="content">
          <div className="info">
            <h4 className="title">
              <Link to={`${"/" + url}`}>{title}</Link>
            </h4>
            <Link to={`${"/" + url}`} className="btn-read-more">
              {btnText} <i className={btnIcon}></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog2Column;
