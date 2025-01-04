import Blog2ColumnContent from "@/components/blog/Blog2ColumnContent";
import LayoutV6 from "@/components/layouts/LayoutV6";
import React from "react";
import { Helmet } from "react-helmet";

const Blog2ColumnPage = () => {
  return (
    <>
      <Helmet>
        <title>Our blog | Delightfluff</title>
        <meta
          name="description"
          content="Explore our blogs for the latest cake ideas, baking tips, and inspiration. Keep up with all our delicious creations and other updates."
        />
      </Helmet>
      <LayoutV6 breadCrumb="Latest Blogs" title="Latest Blogs">
        <Blog2ColumnContent />
      </LayoutV6>
    </>
  );
};

export default Blog2ColumnPage;
