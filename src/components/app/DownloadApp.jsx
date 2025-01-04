import React from "react";
import illustration16 from "/assets/img/illustration/16.png";
import { Link } from "react-router-dom";

const DownloadApp = () => {
  return (
    <>
      <div className="download-app-area default-padding-top">
        <div className="container">
          <div
            className="download-app-items bg-dark text-light"
            style={{ backgroundImage: "url(assets/img/shape/21.png)" }}
          >
            <div className="row align-center">
              <div className="col-lg-5">
                <div
                  className="download-app-thumb animate"
                  data-animate="fadeInUp"
                >
                  <img src={illustration16} alt="Image Not Found" />
                </div>
              </div>
              <div className="col-lg-6 offset-lg-1">
                <h2 className="title">
                  From our oven to your table - what makes us so special?
                </h2>
                <p>
                  At our cake shop, our primary focus is combining artistry with
                  the quality ingredients to create exceptional cakes. Each cake
                  is customized and tailored to unique tastes, offering a
                  remarkable experience that enhances the vibe of any occasion
                  with distinctive flavor, design, and freshness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DownloadApp;
