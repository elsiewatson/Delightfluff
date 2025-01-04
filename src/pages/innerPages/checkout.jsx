import CheckoutPageContent from "@/components/contact/CheckoutPageContent";
import LayoutV6 from "@/components/layouts/LayoutV6";
import React from "react";
import { Helmet } from "react-helmet";

const CheckoutComponent = () => {
  return (
    <>
      <Helmet>
        <title>Add to cart | Delightfluff</title>
        <meta
          name="description"
          content="Do you want to order from us? Add your favorite cake to the cart and experience a seamless checkout process with Delightfluff."
        />
      </Helmet>
      <LayoutV6 title="Checkout" breadCrumb="Checkout">
        <CheckoutPageContent />
      </LayoutV6>
    </>
  );
};

export default CheckoutComponent;
