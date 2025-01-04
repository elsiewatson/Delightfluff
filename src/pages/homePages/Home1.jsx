import React from "react";
import BannerV4 from "../../components/banner/BannerV4";
import FeatureV3 from "../../components/feature/FeatureV3";
import WhyChooseV1 from "@/components/whyChoose/WhyChooseV1";
import DealV1 from "@/components/deal/DealV1";
import FoodCategoryV3 from "@/components/food/FoodCategoryV3";
import DownloadApp from "@/components/app/DownloadApp";
import ChefV1 from "@/components/chef/ChefV1";
import BlogV1 from "@/components/blog/BlogV1";
import LayoutV6 from "@/components/layouts/LayoutV6";
import { Helmet } from "react-helmet";

const Home1 = () => {
 
  return (
    <>
      <Helmet>
        <title>Get freshly baked cake from us | Delightfluff</title>
        <meta
          name="description"
          content="Discover the mouthwatering pastries and cakes from Delightfluff. Our range of freshly baked cakes is perfect to complement your sweet tooth."
        />
      </Helmet>
      <LayoutV6>
        <BannerV4 />
        {/* <FeatureV3 /> */}
        <WhyChooseV1 />
        <DealV1 />
        <FoodCategoryV3 />
        <DownloadApp />
        {/* <ChefV1 /> */}
        <BlogV1 />
      </LayoutV6>
    </>
  );
};

export default Home1;
