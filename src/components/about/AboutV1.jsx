import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import ReactWOW from "react-wow";

const AboutV1 = () => {
  return (
    <>
      <div className="about-style-one-area default-padding">
        <div className="about-thumb">
          <ReactWOW animation="fadeInLeft" delay="100ms">
            <div
              className="item animate"
              style={{ backgroundImage: "url(assets/img/about/2.jpg)" }}
            ></div>
          </ReactWOW>
          <ReactWOW animation="fadeInLeft" delay="200ms">
            <div
              className="item animate"
              style={{ backgroundImage: "url(assets/img/about/3.jpg)" }}
            ></div>
          </ReactWOW>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-6">
              <ReactWOW animation="fadeInUp" delay="400ms">
                <div className="about-style-one-info animate">
                  <h4 className="sub-heading">Our journey</h4>
                  <h2 className="title">
                    We baking journey towards excellence
                  </h2>
                  <p>
                    At Delightfluff, you will get a wide variety of freshly
                    baked items, that are crafted with unique ingredients to
                    bring delightful flavors with each bite. From mouthwatering
                    cakes to delicious pastries, our baked items are perfect for
                    every occasions. Spoil yourself today!
                  </p>
                  <Link
                    className="btn btn-theme btn-md animation mt-10"
                    to="/shop"
                  >
                    Discover More
                  </Link>
                </div>
              </ReactWOW>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutV1;
