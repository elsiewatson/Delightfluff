import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import LayoutV6 from "../layouts/LayoutV6";

const CookiesPolicy = () => {
  return (
    <>
      <LayoutV6 breadCrumb="chef-details" title="Chef Details">
        <div className="chef-single-area bg-gray default-padding-top">
          <div className="container">
            <div className="chef-content-top">
              <div className="row align-center">
                <div className="col-lg-5 left-info">
                  <div className="thumb">
                    {/* <img src={`/assets/img/team/${[thumb]}`} alt="Thumb" /> */}
                  </div>
                </div>
                <div className="col-lg-7 right-info pl-80 pl-md-15 pl-xs-15">
                  <h2>{[name]}</h2>
                  <p>
                    Bring to the table win-win survival strategies to ensure
                    proactive domination. At the end of the day, going forward,
                    a new normal that has evolved from.
                  </p>

                  <ul>
                    <li>
                      <i className="fas fa-map-marker-alt"></i>
                      <p>175 10h Street, Office 375 Berlin, De 21562</p>
                    </li>
                    <li>
                      <i className="fas fa-envelope"></i>
                      {/* <a href={`mailto:${email}`}> {email}</a> */}
                    </li>
                    <li>
                      <i className="fas fa-phone-alt"></i>
                      <a href="tel:123-456-7890">+44-20-7328-4499</a>
                    </li>
                  </ul>
                  <div className="social">
                    <Link
                      className="btn circle btn-sm btn-theme animation"
                      to="/contact#"
                    >
                      Contact Me
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutV6>
    </>
  );
};

export default CookiesPolicy;
