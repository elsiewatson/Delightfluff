import BlogSingleContent from "@/components/blog/BlogSingleContent";
import React from "react";
import LayoutV6 from "@/components/layouts/LayoutV6";
import { Helmet } from "react-helmet";

const BlogSinglePage = () => {
  return (
    <>
      <Helmet>
        <title>
          The secrets behind baking a fluffy and tasty cake | Delightfluff
        </title>
        <meta
          name="description"
          content="Learn how cakes rise with the support of baking soda, eggs, and mixing techniques. A simple guide to understanding the science of delicious, light cakes."
        />
      </Helmet>
      <LayoutV6
        breadCrumb="The Science of Baking: What Makes a Cake Rise?"
        title="The Science of Baking: What Makes a Cake Rise?"
      >
        <BlogSingleContent />
      </LayoutV6>
    </>
  );
};

export default BlogSinglePage;
