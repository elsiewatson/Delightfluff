import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import FooterRowContent from "./FooterRowContent";

const FooterV1 = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-style-one bg-dark text-light">
            <FooterRowContent />
          </div>
        </div>

        <div className="footer-bottom text-light">
          <div className="footer-bottom-shape">
            <img src="/assets/img/shape/9.png" alt="Image Not Found" />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="footer-logo">
                  <Link to="/#">
                    <img src="/assets/img/logo-light.png" alt="Logo" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 text-end">
                <p>
                  Copyright @ 2024{" "}
                  <a href="/" style={{ color: "#826a45" }}>
                    Delightfluff
                  </a>
                  .&nbsp; All Right Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterV1;
