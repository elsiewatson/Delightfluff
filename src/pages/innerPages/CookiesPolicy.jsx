import LayoutV6 from "@/components/layouts/LayoutV6";
import React from "react";
import { Helmet } from "react-helmet";
import { HashLink as Link } from "react-router-hash-link";

const CookiesPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Explore cookies policy | Delightfluff </title>
        <meta
          name="description"
          content="Discover Delightfluff's Cookies Policy to understand how we enhance your browsing experience on our cake shop website."
        />
      </Helmet>
      <LayoutV6 breadCrumb="Cookies Policy" title="Cookies Policy">
        <div className="chef-single-area bg-gray default-padding-top">
          <div className="container">
            <div className="chef-content-top">
              <div className="row align-center">
                <div className="col-lg-12 right-info pl-80 pl-md-15 pl-xs-15">
                  <p>
                    Delightfluff uses cookies in order to enhance your user
                    experience on our website. This Cookies Policy describes
                    what cookies are, how we use such cookies, and how to manage
                    your cookie preferences.
                  </p>
                  <h4>1. What Are Cookies?</h4>
                  <p>
                    Cookies are small text files that a website places on your
                    device when you visit. They are widely used to make websites
                    work more efficiently and to provide a better user
                    experience. Cookies enable websites to remember your actions
                    and preferences over time, such as language settings, login
                    details, or the contents of your shopping cart.
                  </p>
                  <h4>2. Types of Cookies</h4>
                  <p>We employ two major types of cookies on our website:</p>
                  <p>
                    <strong>
                      <strong>Essential Cookies</strong>
                    </strong>
                    : These cookies are necessary for the basic functionality of
                    our website. They enable core features such as secure login,
                    processing orders, and saving your preferences.
                  </p>
                  <p>
                    <strong>
                      <strong>Performance and Analytics Cookies:</strong>
                    </strong>
                    &nbsp;These enable us to understand the actions of visitors
                    to our websites by collecting information on use, which
                    enables us in improving the design and functionality of the
                    website. We, for instance, use tools such as Google
                    Analytics to monitor our website's performance and
                    activities of users.
                  </p>
                  <h4>3. How We Use Cookies</h4>
                  <p style={{ margin: 0 }}>We use cookies to:</p>
                  <ul style={{ marginTop: 0, paddingLeft: "20px" }}>
                    <li>
                      &#8226; Enhance website's functionality and performance
                    </li>
                    <li>
                      &#8226; Remember your preferences and settings to tailor
                      experiences for you
                    </li>
                    <li>
                      &#8226; Analyze website traffic and usage patterns to
                      improve our services
                    </li>
                    <li>&#8226; Secure our website</li>
                  </ul>

                  <h4>4. Third-Party Cookies</h4>
                  <p>
                    We use first-party cookies and also enable some trusted
                    third-party services, like Google Analytics, to place
                    cookies on your device for analytical and advertising
                    purposes.
                  </p>
                  <h4>5. Controlling Cookies</h4>
                  <p>
                    You can control the use of cookies through your browser
                    settings. Many browsers enable you to block or delete
                    cookies. Please note, however, that blocking or deleting
                    strictly necessary cookies may impair your ability to use
                    all or parts of our website.
                  </p>
                  <h4>6. Changes to Our Cookies Policy</h4>
                  <p>
                    We may update our Cookies Policy from time to time. Any
                    changes will be posted on this page and we encourage you to
                    review it periodically to be fair to the information on how
                    we use cookies.
                  </p>
                  <h4>7. Contact Us</h4>
                  <p>
                    If you have questions or concerns about our practices
                    concerning the use of cookies, you may contact us at
                    info@delightfluff.com. We can also provide more information
                    about protecting your privacy and how our website is
                    designed to meet your requirements.
                  </p>
                  <p>
                    Using the website allows you to acknowledge and accept our
                    use of cookies in this policy. You can enjoy choosing
                    Delightfluff.
                  </p>
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
