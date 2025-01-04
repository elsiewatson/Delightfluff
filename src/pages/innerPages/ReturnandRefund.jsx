import LayoutV6 from "@/components/layouts/LayoutV6";
import React from "react";
import { Helmet } from "react-helmet";
import { HashLink as Link } from "react-router-hash-link";

const ReturnandRefund = () => {
  return (
    <>
      <Helmet>
        <title>Our return and refund policies | Delightfluff </title>
        <meta
          name="description"
          content="Go through Delightfluff's return and refund policy to know how we provide easy solutions for returns and refunds to our customers."
        />
      </Helmet>
      <LayoutV6
        breadCrumb="Return and Refund Policy"
        title="Return and Refund Policy"
      >
        <div className="chef-single-area bg-gray default-padding-top">
          <div className="container">
            <div className="chef-content-top">
              <div className="row align-center">
                <div className="col-lg-12 right-info pl-80 pl-md-15 pl-xs-15">
                  <p>
                    Thanks for shopping at Delightfluff. We want you to be
                    totally satisfied with your purchase. But if you're not
                    completely satisfied with your purchase, please see below
                    our return and refund policy.
                  </p>
                  <h4>1. Returns</h4>
                  <p>
                    Due to the perishable nature of our products, we do not
                    accept returns on cakes and baked goods after they have been
                    delivered. Please be sure to double-check your order details
                    before making your purchase.
                  </p>
                  <h4>2. Damaged or Defective Products</h4>
                  <p>
                    If your order arrives&nbsp;to you&nbsp;damaged or defective,
                    please contact us within 24 hours of
                    receiving&nbsp;your&nbsp;delivery. We
                    will&nbsp;analyze&nbsp;the issue and, if
                    applicable,&nbsp;provide&nbsp;a replacement or&nbsp;refund
                    for the affected items. You may be
                    asked&nbsp;for&nbsp;photos of the damaged
                    product&nbsp;in&nbsp;order to verify.
                  </p>
                  <h4>3. Cancellations</h4>
                  <p>
                    Before order preparation for delivery, cancellations are
                    only possible. Once a cake has been prepared or dispatched,
                    no cancellations will be accepted.
                  </p>
                  <h4>4. Refunds</h4>
                  <p>
                    Refunds will be released only when the product is received
                    damaged, defective, or if we are unable to fulfill your
                    order for whatsoever reason. Refunds to the bank account
                    will take place.
                  </p>
                  <h4>5. Contact Us</h4>
                  <p>
                    If you have any questions regarding your order, please just
                    contact us at info@delightfluff.com. We are committed to
                    resolving any issues promptly in order to ensure your full
                    satisfaction.
                  </p>
                  <p>
                    When you use Delightfluff you agree to the terms of return
                    and refund policy.
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

export default ReturnandRefund;
