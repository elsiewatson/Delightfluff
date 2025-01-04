import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const MainMenu = ({ isOpen, closeMenu, navbarPlacement, toggleSubMenu }) => {
  return (
    <>
      <div
        className={`collapse navbar-collapse collapse-mobile ${
          isOpen ? "show" : ""
        }`}
        id="navbar-menu"
      >
        <img src="/assets/img/logo-2.png" alt="Logo" />
        <button
          type="button"
          className="navbar-toggle"
          data-toggle="collapse"
          data-target="#navbar-menu"
          onClick={closeMenu}
        >
          <i className="fa fa-times"></i>
        </button>
        <ul
          className={`nav navbar-nav ${navbarPlacement}`}
          data-in="fadeInDown"
          data-out="fadeOutUp"
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          {/* <li className="dropdown">
            <Link
              to={void 0}
              className="dropdown-toggle"
              data-toggle="dropdown"
              onClick={toggleSubMenu}
            >
              Pages
            </Link>
            <ul className="dropdown-menu animated">
              <li>
                <Link to="/about-us#">About Us</Link>
              </li>
              <li>
                <Link to="/chef#">Chef</Link>
              </li>
              <li>
                <Link to="/chef-details/1#">Chef Details</Link>
              </li>
              <li>
                <Link to="/reservation#">Reservation</Link>
              </li>
              <li>
                <Link to="/contact#">Contact Us</Link>
              </li>
              <li>
                <Link to="/404#">Error Page</Link>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <Link
              to={void 0}
              className="dropdown-toggle"
              data-toggle="dropdown"
              onClick={toggleSubMenu}
            >
              Menu
            </Link>
            <ul className="dropdown-menu animated">
              <li>
                <Link to="/food-menu#">Menu Style One</Link>
              </li>
              <li>
                <Link to="/food-menu-2#">Menu Style Two</Link>
              </li>
              <li>
                <Link to="/food-menu-3#">Menu Style Three</Link>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <Link
              to={void 0}
              className="dropdown-toggle"
              data-toggle="dropdown"
              onClick={toggleSubMenu}
            >
              Blog
            </Link>
            <ul className="dropdown-menu animated">
              <li>
                <Link to="/blog-standard#">Blog Standard</Link>
              </li>
              <li>
                <Link to="/blog-with-sidebar#">Blog With Sidebar</Link>
              </li>
              <li>
                <Link to="/blog-2-column#">Blog Grid Two Column</Link>
              </li>
              <li>
                <Link to="/blog-3-column#">Blog Grid Three Column</Link>
              </li>
              <li>
                <Link to="/blog-single/1#">Blog Single</Link>
              </li>
              <li>
                <Link to="/blog-single-with-sidebar/1#">
                  Blog Single With Sidebar
                </Link>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <Link
              to={void 0}
              className="dropdown-toggle"
              data-toggle="dropdown"
              onClick={toggleSubMenu}
            >
              Shop
            </Link>
            <ul className="dropdown-menu animated">
              <li>
                <Link to="/shop#">Shop</Link>
              </li>
              <li>
                <Link to="/shop-single#">Shop Single</Link>
              </li>
              <li>
                <Link to="/shop-single-2#">Shop Single Two</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/contact#">Contact</Link>
          </li> */}
        </ul>
      </div>
    </>
  );
};

export default MainMenu;
