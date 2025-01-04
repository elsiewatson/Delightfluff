import React from "react";
import { useParams } from "react-router-dom";
import blogData from "@/assets/jsonData/blog/BlogData.json";
import LayoutV6 from "@/components/layouts/LayoutV6";
import BlogSingleContent2 from "@/components/blog/BlogSingleContent2";
import { Helmet } from "react-helmet";

const BlogSinglePage2 = () => {
  return (
    <>
      <Helmet>
        <title>How the vegan cakes became the trend | Delightfluff</title>
        <meta
          name="description"
          content="Learn all about vegan cakes, their ingredients, wellbeing benefits, and the ecological impact of choosing plant-based desserts."
        />
      </Helmet>
      <LayoutV6
        breadCrumb="Vegan Cakes: The Rise of Plant-Based Baking"
        title="Vegan Cakes: The Rise of Plant-Based Baking"
      >
        <BlogSingleContent2 />
      </LayoutV6>
    </>
  );
};

export default BlogSinglePage2;
