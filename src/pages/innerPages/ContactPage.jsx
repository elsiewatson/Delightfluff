import ContactPageContent from "@/components/contact/ContactPageContent";
import LayoutV6 from "@/components/layouts/LayoutV6";
import React from "react";
import { Helmet } from "react-helmet";

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Reach out to us | Delightfluff</title>
        <meta
          name="description"
          content="Feel free to contact our customer support team to resolve your queries regarding our products. We are happy to assist you."
        />
      </Helmet>
      <LayoutV6 title="Contact Us" breadCrumb="Contact Us">
        <ContactPageContent />
      </LayoutV6>
    </>
  );
};

export default ContactPage;
