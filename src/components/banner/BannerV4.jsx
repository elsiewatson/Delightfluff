import React from "react";
import PopupVideo from "../video/PopupVideo";

const BannerV4 = () => {
  return (
    <>
      <div
        className="banner-style-four-area text-light text-center bg-cover"
        style={{ backgroundImage: "url(assets/img/banner/14.jpg)" }}
      >
        <div className="banner-style-four-content shadow dark">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <h1 style={{ fontSize: "80px" }}>
                  Indulge in sweet perfection
                </h1>
                {/* <div className="curve-text">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 150 150"
                    version="1.1"
                  >
                    <path id="textPath" d="M 0,75 a 75,75 0 1,1 0,1 z"></path>
                    <text>
                      <textPath href="#textPath">
                        Say wow to our varieties
                      </textPath>
                    </text>
                  </svg>
                  <div
                    style={{ cursor: "default" }}
                  >
                    <i className="fas fa-arrow-right"></i>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerV4;
