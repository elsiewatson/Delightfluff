import React from "react";
import ReactWOW from "react-wow";
import ContactForm from "../form/ContactForm";

const ContactV2 = () => {
  return (
    <>
      <div className="contact-style-one-area default-padding overflow-hidden">
        <div className="container">
          <div className="row align-center">
            <div className="col-lg-10 offset-lg-1">
              <div className="contact-form-style-one">
                <div className="heading text-center">
                  <h5 className="sub-title">Keep in touch</h5>
                  <h2 className="heading">Send us a Massage</h2>
                </div>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactV2;
