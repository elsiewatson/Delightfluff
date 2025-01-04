import LayoutV6 from "@/components/layouts/LayoutV6";
import ShopPageContent from "@/components/shop/ShopPageContent";
import React from "react";
import { Helmet } from "react-helmet";

const ShopPage = () => {
  return (
    <>
      <Helmet>
        <title>Explore a wide range of cakes | Delightfluff</title>
        <meta
          name="description"
          content="Browse our collections to get your favorite cakes. Our cakes are perfect to celebrate every occasion. Order yours now."
        />
      </Helmet>
      <LayoutV6 breadCrumb="Shop" title="Shop">
        <ShopPageContent />
      </LayoutV6>
    </>
  );
};

export default ShopPage;
