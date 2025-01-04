import React from "react";
import { Route, Routes } from "react-router-dom";
import Home1 from "./pages/homePages/Home1";
import AboutUsPage from "./pages/innerPages/AboutUsPage";
import ContactPage from "./pages/innerPages/ContactPage";
import Blog2ColumnPage from "./pages/blogPages/Blog2ColumnPage";
import BlogSinglePage from "./pages/blogPages/BlogSinglePage";
import ShopPage from "./pages/shopPages/ShopPage";
import NotFoundPage from "./components/notFound/NotFoundPage";
import BlogSinglePage2 from "./pages/blogPages/BlogSinglePage2";
import CookiesPolicy from "./pages/innerPages/CookiesPolicy";
import PrivacyPolicy from "./pages/innerPages/PrivacyPolicy";
import ReturnandRefund from "./pages/innerPages/ReturnandRefund";
import TermsandConditions from "./pages/innerPages/TermsandConditions";
import Personalizedweddingcake from "./pages/shopPages/personalized-wedding-cake";
import Custombirthdaycake from "./pages/shopPages/custom-birthday-cake";
import Classicchocolatefudgecake from "./pages/shopPages/classic-chocolate-fudge-cake";
import Decadentredvelvetcake from "./pages/shopPages/decadent-red-velvet-cake";
import Christmasalmondfruitcake from "./pages/shopPages/christmas-almond-fruitcake";
import Halloweenpumpkinspicecake from "./pages/shopPages/halloween-pumpkin-spice-cake";
import Miniaturelemonmeringuecupcakes from "./pages/shopPages/miniature-lemon-meringue-cupcakes";
import Chocolateraspberryminicakes from "./pages/shopPages/chocolate-raspberry-mini-cakes";
import CheckoutComponent from "./pages/innerPages/checkout";

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home1 />}></Route>
        <Route path="/about" element={<AboutUsPage />}></Route>
        <Route path="/blogs" element={<Blog2ColumnPage />}></Route>
        <Route path="/shop" element={<ShopPage />}></Route>
        <Route
          path="/the-science-of-baking-what-makes-a-cake-rise"
          element={<BlogSinglePage />}
        ></Route>
        <Route
          path="/vegan-cakes-the-rise-of-plant-based-baking"
          element={<BlogSinglePage2 />}
        ></Route>
        <Route path="/cookies-policy" element={<CookiesPolicy />}></Route>
        <Route path="/privacy-policy" element={<PrivacyPolicy />}></Route>
        <Route
          path="/return-and-refund-policy"
          element={<ReturnandRefund />}
        ></Route>
        <Route
          path="/terms-and-conditions"
          element={<TermsandConditions />}
        ></Route>
        <Route path="/contact" element={<ContactPage />}></Route>
        <Route path="/checkout" element={<CheckoutComponent />}></Route>
        <Route
          path="/personalized-wedding-cake"
          element={<Personalizedweddingcake />}
        ></Route>
        <Route
          path="/custom-birthday-cake"
          element={<Custombirthdaycake />}
        ></Route>
        <Route
          path="/classic-chocolate-fudge-cake"
          element={<Classicchocolatefudgecake />}
        ></Route>
        <Route
          path="/decadent-red-velvet-cake"
          element={<Decadentredvelvetcake />}
        ></Route>
        <Route
          path="/christmas-almond-fruitcake"
          element={<Christmasalmondfruitcake />}
        ></Route>
        <Route
          path="/halloween-pumpkin-spice-cake"
          element={<Halloweenpumpkinspicecake />}
        ></Route>
        <Route
          path="/miniature-lemon-meringue-cupcakes"
          element={<Miniaturelemonmeringuecupcakes />}
        ></Route>
        <Route
          path="/chocolate-raspberry-mini-cakes"
          element={<Chocolateraspberryminicakes />}
        ></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </>
  );
};

export default Routers;
