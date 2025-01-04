import AboutV1 from "@/components/about/AboutV1";
import BrandV1 from "@/components/brand/BrandV1";
import ChefV1 from "@/components/chef/ChefV1";
import BusinessHours from "@/components/hours/BusinessHours";
import LayoutV6 from "@/components/layouts/LayoutV6";
import React from "react";
import { Helmet } from "react-helmet";

const AboutUsPage = () => {
  return (
    <>
      <Helmet>
        <title>Know about our cake shop | Delightfluff</title>
        <meta
          name="description"
          content="Our Hong Kong-based cake shop designs delectable pastries and cakes with complete passion and commitment to artistic design and creativity."
        />
      </Helmet>
      <LayoutV6 breadCrumb="About Us" title="About Us">
        <AboutV1 />
        <ChefV1 />
      </LayoutV6>
    </>
  );
};

export default AboutUsPage;
