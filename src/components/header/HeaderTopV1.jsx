import React from "react";
import SocialShare from "../social/SocialShare";
import { Link } from "react-router-dom";

const HeaderTopV1 = ({ sectionClass }) => {
  return (
    <>
      <div
        className={`top-bar-area top-bar-style-one bg-theme text-light ${sectionClass}`}
      >
        <div className="container">
          <div className="row align-center">
            <div className="col-lg-7">
              <ul className="item-flex">
                <li>
                  <a href="tel:+85254687243">
                    <img src="/assets/img/icon/6.png" alt="Icon" /> Phone:
                    +85254687243
                  </a>
                </li>
                <li>
                  <a href="mailto:info@delightfluff.com">
                    <img src="/assets/img/icon/7.png" alt="Icon" /> Email:
                    info@delightfluff.com
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-5 text-end">
              <div className="item-flex">
                <div className="social">
                  <ul>
                    <SocialShare />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderTopV1;
