import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Autoplay } from "swiper/modules";
import ProductCarouselData from "@/assets/jsonData/product/ProductCarouselData.json";
import { Link } from "react-router-dom";
import ShopProductTab from "@/components/product/ShopProductTab";
import RelatedProducts from "@/components/product/RelatedProducts";
import LayoutV6 from "@/components/layouts/LayoutV6";
import { Helmet } from "react-helmet";

const Christmasalmondfruitcake = () => {
  return (
    <>
      <Helmet>
        <title>Buy christmas almond fruitcake | Delightfluff </title>
        <meta
          name="description"
          content="Indulge in the flavors of christmas with our almond fruitcake, featuring a perfect mix of dried fruits, warm spices, and roasted almonds."
        />
      </Helmet>
      <LayoutV6
        breadCrumb="Christmas almond fruitcake"
        title="Christmas almond fruitcake"
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
                          className={`carousel-item product-item ${ProductCarouselData.innerCarousel[4].activeClass5}`}
                        >
                          <img
                            src={`assets/img/shop/${ProductCarouselData.innerCarousel[4].thumb}`}
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
                        <del>HKD 100.00</del>
                      </span>{" "}
                      <span>HKD 80.00</span>
                    </div>
                    <h4>
                      <strong>Short description</strong>
                    </h4>
                    <p>
                      Celebrate the season of lights, hope, and happiness,
                      Christmas, with our specially designed almond fruitcake.
                      This is a rich and spiced cake that is filled with dried
                      fruits and nuts and topped with roasted almonds for a
                      flavorful holiday dessert item.
                    </p>
                    <h4>
                      <strong>
                        <strong>Long description</strong>
                      </strong>
                    </h4>
                    <p>
                      Experience the holiday spirit with our exclusively curated
                      Christmas almond fruitcake, a traditional flavor designed
                      with love. Packed with crunchy nuts and a medley of dried
                      fruits, this cake is infused with a hint of festive cheer
                      and warm spices. Get the crunchiness of almonds in every
                      bite, which is an added satisfying texture to the
                      flavorful and moist base. Perfect as a centerpiece or gift
                      item for your celebrations, embodying the essence of
                      Christmas in each slice.
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

export default Christmasalmondfruitcake;
