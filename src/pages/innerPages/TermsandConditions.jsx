import LayoutV6 from "@/components/layouts/LayoutV6";
import React from "react";
import { Helmet } from "react-helmet";
import { HashLink as Link } from "react-router-hash-link";

const TermsandConditions = () => {
  return (
    <>
      <Helmet>
        <title>Our terms and conditions | Delightfluff </title>
        <meta
          name="description"
          content="Before shopping with us, review the terms and conditions of Delightfluff. Learn about our policies regarding placing an order, customer rights, and payment methods."
        />
      </Helmet>
      <LayoutV6 breadCrumb="Terms and Conditions" title="Terms and Conditions">
        <div className="chef-single-area bg-gray default-padding-top">
          <div className="container">
            <div className="chef-content-top">
              <div className="row align-center">
                <div className="col-lg-12 right-info pl-80 pl-md-15 pl-xs-15">
                  <p>
                    Welcome to Delightfluff, a cake shop in Hong Kong focused on
                    bringing you fresh cakes and yummy cakes. For ordering with
                    us, you need to accept the following terms and conditions.
                  </p>
                  <h4>1. Availability of Products</h4>
                  <p>
                    Our cakes are made with love, and great attention to detail.
                    Any item presented on our web page will be subject to
                    availability. If an order item becomes unavailable, you will
                    be contacted as quickly as possible and alternatives will be
                    found if appropriate.
                  </p>
                  <h4>2. Confirmation of Order and Payment</h4>
                  <p>
                    You shall receive an order confirmation as soon as the order
                    has been placed. All of its payment is done through cash on
                    delivery. Other kinds of payments are not accommodated at
                    the moment. Payment in cash will be received only upon
                    delivery; after that, the delivery shall proceed.
                  </p>
                  <h4>3. Delivery Policy</h4>
                  <p>
                    We currently provide shipping within Hong Kong. We are not
                    able to ship outside of Hong Kong. Orders are shipped to the
                    delivery address within Hong Kong. Delivery fees vary based
                    on location and size of the order. We strive to deliver all
                    cakes as quickly and promptly as possible.
                  </p>
                  <h4>4. Customer Data Protection</h4>
                  <p>
                    At Delightfluff, we ensure privacy and protection of
                    personal data; information provided while you placed your
                    order will only be used to complete the orders and
                    communication for the purpose of delivery. Your data will
                    not be shared or sold or traded to anyone else for any
                    reason. You don't have to worry as the data is completely
                    confidential.
                  </p>
                  <h4>5. Order Cancellation and Modification</h4>
                  <p>
                    Orders can be modified or canceled only before they have
                    been processed for delivery. Cancellations or changes of
                    orders after confirmation and dispatch will not be accepted.
                    We suggest that you verify all the details before you
                    confirm your order.
                  </p>
                  <h4>6. Quality Assurance</h4>
                  <p>
                    All our cakes are of very high standards in quality and
                    hygiene. In rare cases when you do not receive satisfaction
                    with the product please contact us within 24 hours of
                    delivery for resolution. We will listen to your case and
                    give due attention to solving it quickly.
                  </p>
                  <h4>7. Limitation of Liability</h4>
                  <p>
                    Although we make every effort to ensure that our cakes are
                    delivered in pristine condition, Delightfluff has no
                    responsibility for any damages caused while in transit. We
                    recommend inspecting the product on delivery to determine
                    whether it meets your standards.
                  </p>
                  <h4>8. Changes to Terms</h4>
                  <p>
                    Delightfluff can make amendments or updates to this user
                    agreement at any time, by posting the changes to its
                    website. You must refer to our website regularly to take
                    notice of any updates, as continued use of Delightfluff
                    shall be deemed acceptance of such a changed and updated
                    version.
                  </p>
                  <h4>9. Jurisdiction</h4>
                  <p>
                    These terms and conditions are governed by the laws of Hong
                    Kong. All disputes arising from your use of our services are
                    governed by Hong Kong law.
                  </p>
                  <h4>10. Contact Us</h4>
                  <p>
                    If you have a question or concern about one of our products
                    or services, please don't hesitate to get in touch with us
                    at info@delightfluff.com. We're always happy to help.
                  </p>
                  <p>
                    By ordering from Delightfluff, you agree that you have read,
                    understood, and accepted these terms and conditions. Thanks
                    for choosing us to be part of your sweet moments!
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

export default TermsandConditions;
