import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Autoplay } from "swiper/modules";
import ProductCarouselData from "@/assets/jsonData/product/ProductCarouselData.json";
import { Link } from "react-router-dom";
import ShopProductTab from "@/components/product/ShopProductTab";
import RelatedProducts from "@/components/product/RelatedProducts";
import LayoutV6 from "@/components/layouts/LayoutV6";
import { Helmet } from "react-helmet";

const Custombirthdaycake = () => {
  return (
    <>
      <Helmet>
        <title>Custom birthday cakes | Delightfluff</title>
        <meta
          name="description"
          content="Celebrate in style with a custom birthday cake, tailored to your flavor and theme. Personalized every detail for a memorable and unique dessert item."
        />
      </Helmet>
      <LayoutV6 breadCrumb="Custom birthday cake" title="Custom birthday cake">
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
                          className={`carousel-item product-item ${ProductCarouselData.innerCarousel[1].activeClass2}`}
                        >
                          <img
                            src={`assets/img/shop/${ProductCarouselData.innerCarousel[1].thumb}`}
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
                        <del>HKD 80.00</del>
                      </span>{" "}
                      <span>HKD 64.00</span>
                    </div>
                    <h4>
                      <strong>Short description</strong>
                    </h4>
                    <p>
                      Make each of your celebrations unique and remarkable with
                      our custom birthday cakes, tailored to your flavor and
                      style preferences. Designed with attention to detail that
                      creates perfect centerpieces for your special day.
                    </p>
                    <h4>
                      <strong>
                        <strong>Long description</strong>
                      </strong>
                    </h4>
                    <p>
                      Whether you want a photo-attached cake for your son’s
                      birthday or want a flower motif cake for your anniversary,
                      celebrate every occasion in style with our variety of
                      custom birthday cake options. Whether your requirement is
                      an elegant design or a whimsical theme, we design each of
                      the varieties to match your taste and vision. Get the
                      personalized masterpiece with exclusive designs and
                      decorations that are as delicious as they are beautiful
                      and help you to bring your dream cake to life.
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

export default Custombirthdaycake;
