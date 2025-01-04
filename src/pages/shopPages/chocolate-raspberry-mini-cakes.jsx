import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Autoplay } from "swiper/modules";
import ProductCarouselData from "@/assets/jsonData/product/ProductCarouselData.json";
import { Link } from "react-router-dom";
import RelatedProducts from "@/components/product/RelatedProducts";
import LayoutV6 from "@/components/layouts/LayoutV6";
import { Helmet } from "react-helmet";

const Chocolateraspberryminicakes = () => {
  return (
    <>
      <Helmet>
        <title>Our chocolate raspberry mini cakes | Delightfluff</title>
        <meta
          name="description"
          content="Savor the perfect blend of chocolate and raspberry with our mini cakes, crafted with zesty raspberry filling, glossy glaze, and rich chocolate."
        />
      </Helmet>
      <LayoutV6
        breadCrumb="Chocolate raspberry mini cakes"
        title="Chocolate raspberry mini cakes"
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
                          className={`carousel-item product-item ${ProductCarouselData.innerCarousel[7].activeClass8}`}
                        >
                          <img
                            src={`assets/img/shop/${ProductCarouselData.innerCarousel[7].thumb}`}
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
                                  className={`item ${data.activeClass8}`}
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
                        <del>HKD 70.00</del>
                      </span>{" "}
                      <span>HKD 56.00</span>
                    </div>
                    <h4>
                      <strong>Short description</strong>
                    </h4>
                    <p>
                      Indulge in our tempting chocolate raspberry mini cakes,
                      featuring rich chocolate layers, velvety glaze, and tangy
                      raspberry filling. This is the perfect dessert for a sweet
                      personal escape and for every celebration.
                    </p>
                    <h4>
                      <strong>
                        <strong>Long description</strong>
                      </strong>
                    </h4>
                    <p>
                      This cake is a delightful indulgence, offering the perfect
                      balance of elegance and decadence. Each mini cake features
                      tart raspberry filling and layers of moist chocolate
                      sponge, which perfectly balance sweetness. Garnished with
                      fresh raspberry and finished with a glossy chocolate
                      glaze, these mini cakes are both flavorful and visually
                      stunning, which makes them perfect for any celebration.
                      Whether for indulgent tea time or an intimate celebration,
                      get a remarkable and luxurious dessert experience from
                      these mini cakes.
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

export default Chocolateraspberryminicakes;
