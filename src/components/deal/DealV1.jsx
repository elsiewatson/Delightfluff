import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import ReactWOW from "react-wow";

const DealV1 = () => {
  return (
    <>
      <div className="big-deal-area">
        <div className="container">
          <div
            className="deal-style-one-items"
            style={{ backgroundImage: "url(assets/img/shape/4.jpg)" }}
          >
            <div className="row align-center">
              <div className="col-lg-6 pr-80 pr-md-15 pr-xs-15">
                <div className="deal-thumb">
                  <img
                    src="/assets/img/illustration/1.png"
                    alt="Image Not Found"
                  />
                  <img
                    src="/assets/img/illustration/15.png"
                    alt="Image Not Found"
                  />
                  <img
                    src="/assets/img/illustration/12.png"
                    alt="Image Not Found"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="deal-info">
                  <h4 className="sub-heading">Who is Delightfluff</h4>
                  <h2>Our story of excellence</h2>
                  <p>
                    Delightfluff is a fresh face in the domain of the cake
                    industry in Hong Kong. We offer exclusively designed cakes
                    crafted with creative design, premium ingredients, and a
                    passion for remarkable flavors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DealV1;
