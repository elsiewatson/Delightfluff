import React from "react";
import BlogV1Data from "@/assets/jsonData/blog/BlogV1Data.json";
import SingleBlogV1 from "./SingleBlogV1";

const BlogV1 = () => {
  return (
    <>
      <div className="blog-area home-blog default-padding bottom-less">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="site-heading text-center">
                <h4 className="sub-title">Our blogs</h4>
                <h2 className="title">Latest blogs and insights</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {BlogV1Data.map((blog) => (
              <div className="col-lg-6" key={blog.id}>
                <SingleBlogV1 blog={blog} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogV1;
