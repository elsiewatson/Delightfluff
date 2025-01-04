import LayoutV6 from "@/components/layouts/LayoutV6";
import React from "react";
import { Helmet } from "react-helmet";
import { HashLink as Link } from "react-router-hash-link";

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Review privacy policy | Delightfluff </title>
        <meta
          name="description"
          content="Read our privacy policy. Delightfluff strictly values your privacy and makes sure that all your personal data and information are safeguarded with us when you visit us."
        />
      </Helmet>
      <LayoutV6 breadCrumb="Privacy Policy" title="Privacy Policy">
        <div className="chef-single-area bg-gray default-padding-top">
          <div className="container">
            <div className="chef-content-top">
              <div className="row align-center">
                <div className="col-lg-12 right-info pl-80 pl-md-15 pl-xs-15">
                  <p>
                    At Delightfluff, we believe in the trust you have given us
                    when you use our services, and we will protect your privacy.
                    This Privacy Policy explains how we collect, use, and
                    protect your personal information when you interact with our
                    website and services. You agree to the terms described in
                    this policy by using this website.
                  </p>
                  <h4>1. What Information We Collect</h4>
                  <p>
                    When you visit our website or place an order with us, we may
                    collect specific personal details to complete the
                    transaction and improve your overall experience. These may
                    range from name and address and phone number to email.
                  </p>
                  <h4>2. How we use your information</h4>
                  <p>
                    We use the information you provide to process your orders,
                    to contact you with regard to your orders and purchases, and
                    for general service improvement. Contact information may
                    also be used in order to keep you abreast of offers and
                    information about new products, product updates, or your
                    package delivery status; but will not send any promotional
                    mail unless authorized to do so.
                  </p>
                  <h4>3. Data Protection and Privacy under PDPO</h4>
                  <p>
                    As a Hong Kong-based company, we follow the Personal Data
                    (Privacy) Ordinance or simply termed PDPO, which provides
                    for rules on how personal data shall be handled. We do
                    everything in our power to make sure that your personal data
                    is safe and processed according to the law. All your
                    personal data will never be collected or processed to an
                    extent beyond what we find it necessary to provide our
                    service.
                  </p>
                  <h4>4. Children's Privacy</h4>
                  <p>
                    We are not liable for any usage by children under 13 years
                    of age. We do not knowingly collect information from
                    children. If we find out that we have collected information
                    from a child under 13 without parent or guardian consent, we
                    will take reasonable steps to eliminate that information
                    from our database as soon as possible. If you are a parent
                    or guardian and believe your child has provided us with
                    personal information, please contact us immediately.
                  </p>
                  <h4>5. How We Protect Your Data</h4>
                  <p>
                    Your privacy is the important thing to us, and we use many
                    different measures to protect your personal information,
                    including encryption and secure servers. But we cannot
                    guarantee the security of any information that you provide
                    to us, since even the reliable methods of transmission over
                    the internet or any electronic storage method are not
                    completely secure.
                  </p>
                  <h4>6. Access, Correction, and Deletion of Data</h4>
                  <p>
                    Under the PDPO, you have the right to access, correct or
                    request for deletion of all personal data we hold regarding
                    you.
                  </p>
                  <h4>7. Changes to This Privacy Policy</h4>
                  <p>
                    We may modify this Privacy Policy from time to time. All
                    changes will be posted here and elsewhere on our website. We
                    encourage you to check back periodically for updates. Your
                    continued use of our website after we post changes to this
                    Privacy Policy indicates your acceptance of those changes.
                  </p>
                  <h4>8. Contact Us</h4>
                  <p>
                    In case you have questions or concerns regarding our Privacy
                    Policy and the way we handle your personal information,
                    please feel free to contact us at info@delightfluff.com. We
                    are here to help and make sure that your experience with
                    Delightfluff is not only delightful but also safe.
                  </p>
                  <p>
                    By accessing this website, you agree that you have read and
                    accepted the terms of this Privacy Policy. Thank you for
                    entrusting Delightfluff with your personal information.
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

export default PrivacyPolicy;
