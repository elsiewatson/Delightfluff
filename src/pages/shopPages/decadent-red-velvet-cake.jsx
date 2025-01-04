import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Autoplay } from "swiper/modules";
import ProductCarouselData from "@/assets/jsonData/product/ProductCarouselData.json";
import { Link } from "react-router-dom";
import ShopProductTab from "@/components/product/ShopProductTab";
import RelatedProducts from "@/components/product/RelatedProducts";
import LayoutV6 from "@/components/layouts/LayoutV6";
import { Helmet } from "react-helmet";

const Decadentredvelvetcake = () => {
  return (
    <>
      <Helmet>
        <title>Our decadent red velvet cake | Delightfluff </title>
        <meta
          name="description"
          content="Experience the perfect combination of flavor and richness with our decadent red velvet cake, featuring smooth cream cheese and a vibrant sponge."
        />
      </Helmet>
      <LayoutV6
        breadCrumb="Decadent red velvet cake"
        title="Decadent red velvet cake"
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
                          className={`carousel-item product-item ${ProductCarouselData.innerCarousel[3].activeClass4}`}
                        >
                          <img
                            src={`assets/img/shop/${ProductCarouselData.innerCarousel[3].thumb}`}
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
                        <del>HKD 75.00</del>
                      </span>{" "}
                      <span>HKD 60.00</span>
                    </div>
                    <h4>
                      <strong>Short description</strong>
                    </h4>
                    <p>
                      Indulge in the delightful elegance of our red velvet cake,
                      featuring moist crimson sponge layers, each enriched with
                      tangy cream cheese frosting for a perfect balance of
                      richness and sweetness.
                    </p>
                    <h4>
                      <strong>
                        <strong>Long description</strong>
                      </strong>
                    </h4>
                    <p>
                      Our decadent red velvet cake gives you the experience of
                      luxury in every bite. Baked with a vibrant red sponge and
                      layers of tender cocoa flavor, it is complemented by
                      tempting cream cheese frosting. Each of the slices of this
                      cake offers the perfect harmony of tanginess and
                      sweetness, making it a showstopper for any celebration.
                      This cake is both irresistibly delicious and visually
                      stunning, topped with a smooth, velvety finish. Perfect
                      for anniversaries, birthdays, or baby showers, it brings
                      an unforgettable touch of grace and sophistication.
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

export default Decadentredvelvetcake;
