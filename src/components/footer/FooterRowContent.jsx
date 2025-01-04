import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import SocialShare from "../social/SocialShare";
import FooterNewsLetter from "../form/FooterNewsLetter";

const FooterRowContent = () => {
  return (
    <>
      <div className="row">
        <div className="col-lg-3 col-md-6 footer-item mt-50">
          <div className="f-item about">
            <h4 className="widget-title">About Us</h4>
            <p>
              Check out the tastiest baking creation by Delightfluff and explore
              creativity and quality in every bite.
            </p>
            <ul className="footer-social">
              <SocialShare />
            </ul>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 mt-50 footer-item pl-50 pl-md-15 pl-xs-15">
          <div className="f-item link">
            <h4 className="widget-title">Quick Links</h4>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/shop#">Shop</Link>
              </li>
              <li>
                <Link to="/blogs">Blogs</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 footer-item  mt-50">
          <div className="f-item link">
            <h4 className="widget-title">Other Links</h4>
            <ul>
              <li>
                <Link to="/cookies-policy">Cookies Policy</Link>
              </li>
              <li>
                <Link to="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/return-and-refund-policy">
                  Return and Refund Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-and-conditions">Terms and Conditions</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 footer-item mt-50">
          <div className="f-item contact">
            <h4 className="widget-title">Contact Info</h4>
            <ul>
              <li>
                <div className="icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="content">
                  130 Tung Choi St, Mong Kok, Hong Kong
                </div>
              </li>
              <li>
                <div className="icon">
                  <i className="fas fa-phone"></i>
                </div>
                <div
                  className="content"
                  style={{ display: "flex", alignItems: "center", paddingTop:"10px" }}
                >
                  <a href="tel:+85254687243 ">+85254687243 </a>
                </div>
              </li>
              <li>
                <div className="icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="content">
                  <a href="mailto:info@delightfluff.com">
                    info@delightfluff.com
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterRowContent;
