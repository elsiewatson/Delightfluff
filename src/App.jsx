import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "swiper/css";
import "swiper/css/bundle";
import "react-modal-video/css/modal-video.css";
import "react-toastify/dist/ReactToastify.css";
import "react-photo-view/dist/react-photo-view.css";
import "react-datepicker/dist/react-datepicker.css";

import "../src/assets/css/font-awesome.min.css";
import "../src/assets/css/animate.min.css";
import "../src/assets/css/flaticon-set.css";
import "../src/assets/css/shop.css";
import "../src/assets/css/helper.css";
import "../src/assets/css/unit-test.css";
import "../src/assets/css/validnavs.css";
import "../src/assets/css/style.css";

import { ToastContainer } from "react-toastify";
import Routers from "./Routers";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    // Prevent browser's scroll restoration
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // Scroll to the top on component mount
    window.scrollTo(0, 0);

    // Optional cleanup for future-proofing
    return () => {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "auto";
      }
    };
  }, []);
  return (
    <>
      <Routers />
      <ToastContainer />
    </>
  );
}

export default App;
