import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Autoplay } from "swiper/modules";
import ProductCarouselData from "@/assets/jsonData/product/ProductCarouselData.json";
import { Link } from "react-router-dom";
import ShopProductTab from "@/components/product/ShopProductTab";
import RelatedProducts from "@/components/product/RelatedProducts";
import LayoutV6 from "@/components/layouts/LayoutV6";
import { Helmet } from "react-helmet";

const Classicchocolatefudgecake = () => {
  return (
    <>
      <Helmet>
        <title>
          Explore the classiness of chocolate fudge cake | Delightfluff
        </title>
        <meta
          name="description"
          content="Experience the perfect dessert with our classic chocolate fudge cake, topped with a rich ganache and layered with velvety fudge."
        />
      </Helmet>
      <LayoutV6
        breadCrumb="Classic chocolate fudge cake"
        title="Classic chocolate fudge cake"
      >
        <div className="validtheme-shop-single-area default-padding">
          <div className="container">
            <div className="product-details">
              <div className="row">
                <div className="col-lg-6">
                  <div className="product-thumb">
                    <div
                      id="timeline-carousel"
                      className="carousel slide"
                      data-bs-ride="carousel"
                    >
                      <div className="carousel-inner item-box">
                        <div
                          className={`carousel-item product-item ${ProductCarouselData.innerCarousel[2].activeClass3}`}
                        >
                          <img
                            src={`assets/img/shop/${ProductCarouselData.innerCarousel[2].thumb}`}
                            alt="Thumb"
                          />
                        </div>
                      </div>
                      {/* <div className="carousel-indicators">
                        <Swiper
                          className="product-gallery-carousel"
                          modules={[Keyboard, Autoplay]}
                          loop={true}
                          slidesPerView={2}
                          spaceBetween={30}
                          autoplay={false}
                          breakpoints={{
                            768: {
                              slidesPerView: 3,
                            },
                            992: {
                              slidesPerView: 3,
                            },
                            1200: {
                              slidesPerView: 4,
                            },
                          }}
                        >
                          <div className="swiper-wrapper">
                            {ProductCarouselData.outerCarousel.map((data) => (
                              <SwiperSlide
                                className="swiper-slide"
                                key={data.id}
                              >
                                <div
                                  className={`item ${data.activeClass}`}
                                  data-bs-target="#timeline-carousel"
                                  data-bs-slide-to={data.slideNumber}
                                  aria-current="true"
                                >
                                  <img
                                    src={`assets/img/shop/${data.thumb}`}
                                    alt=""
                                  />
                                </div>
                              </SwiperSlide>
                            ))}
                          </div>
                        </Swiper>
                      </div> */}
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="single-product-contents">
                    <div className="price">
                      <span>Price: </span>
                      <span>
                        <del>HKD 60.00</del>
                      </span>{" "}
                      <span>HKD 48.00</span>
                    </div>
                    <h4>
                      <strong>Short description</strong>
                    </h4>
                    <p>
                      Get the delightful chocolate experience with our classic
                      chocolate fudge cake. The moist, rich layers of this
                      dessert are topped with a glossy ganache and perfectly
                      layered with creamy chocolate fudge – perfect to fulfill
                      your chocolate cravings for any occasion.
                    </p>
                    <h4>
                      <strong>
                        <strong>Long description</strong>
                      </strong>
                    </h4>
                    <p>
                      This timeless delight is a tempting option for every
                      chocolate lover. Each bite of this cake offers a velvety,
                      moist chocolate sponge, generously layered with decadent,
                      smooth chocolate fudge. This cake is as delicious as it is
                      visually stunning, finished with a luscious ganache glaze.
                      Whether enjoying a simple moment of indulgence or
                      celebrating a special occasion, our chocolate fudge cake
                      is the perfect option, while its chocolaty flavor will
                      completely melt in your mouth, making it a remarkable
                      dessert experience.
                    </p>
                    <div className="product-purchase-list">
                      <Link
                        to="/checkout"
                        className="btn secondary btn-theme btn-sm animation"
                      >
                        <i className="fas fa-shopping-cart"></i>
                        Buy
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <RelatedProducts />
          </div>
        </div>
      </LayoutV6>
    </>
  );
};

export default Classicchocolatefudgecake;
