import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const SingleBlogV1 = ({ blog }) => {
  const { id, thumb, day, month, author, title, btnText, url } = blog;

  return (
    <>
      <div className="home-blog-style-one-item">
        <Link to={`${"/" + url}`}>
          <img src={`assets/img/blog/${thumb}`} alt="Image not Found" />
        </Link>
        <div className="content">
          <div className="info">
            <h4 className="title">
              <Link to={`${"/" + url}`}>{title}</Link>
            </h4>
            <Link to={`${"/" + url}`} className="btn-read-more">
              {btnText} <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlogV1;
