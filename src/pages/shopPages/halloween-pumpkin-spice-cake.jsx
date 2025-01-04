import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Autoplay } from "swiper/modules";
import ProductCarouselData from "@/assets/jsonData/product/ProductCarouselData.json";
import { Link } from "react-router-dom";
import ShopProductTab from "@/components/product/ShopProductTab";
import RelatedProducts from "@/components/product/RelatedProducts";
import LayoutV6 from "@/components/layouts/LayoutV6";
import { Helmet } from "react-helmet";

const Halloweenpumpkinspicecake = () => {
  return (
    <>
      <Helmet>
        <title>Our Halloween pumpkin spice cake | Delightfluff</title>
        <meta
          name="description"
          content="Delight in our Halloween pumpkin spice cake, a festive favorite with warm spices, moist pumpkin layers, and smooth frosting."
        />
      </Helmet>
      <LayoutV6
        breadCrumb="Halloween pumpkin spice cake"
        title="Halloween pumpkin spice cake"
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
                          className={`carousel-item product-item ${ProductCarouselData.innerCarousel[5].activeClass6}`}
                        >
                          <img
                            src={`assets/img/shop/${ProductCarouselData.innerCarousel[5].thumb}`}
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
                        <del>HKD 85.00</del>
                      </span>{" "}
                      <span>HKD 68.00</span>
                    </div>
                    <h4>
                      <strong>Short description</strong>
                    </h4>
                    <p>
                      Indulge in the celebrations of the spooky season with our
                      Halloween pumpkin spice cake, which is made with moist
                      pumpkin layers, creamy frosting, festive decorations, and
                      a devilishly delectable delight.
                    </p>
                    <h4>
                      <strong>
                        <strong>Long description</strong>
                      </strong>
                    </h4>
                    <p>
                      This seasonal delight is appropriate for fall festivities,
                      which is the combination of nutmeg, cinnamon, and other
                      warming spices. Our pumpkin spice cake embraces the spirit
                      of Halloween, offering a flavorful and cozy experience.
                      This cake is adorned with playful decorations and topped
                      with smooth cream cheese frosting, which can complement
                      both the palate and the eyes. Whether for personal
                      indulgence or a party centerpiece, our pumpkin spice will
                      enhance your festive mood with the season's flavor.
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

export default Halloweenpumpkinspicecake;
