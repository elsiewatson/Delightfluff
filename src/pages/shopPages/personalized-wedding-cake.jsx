import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Autoplay } from "swiper/modules";
import ProductCarouselData from "@/assets/jsonData/product/ProductCarouselData.json";
import { Link } from "react-router-dom";
import ShopProductTab from "@/components/product/ShopProductTab";
import RelatedProducts from "@/components/product/RelatedProducts";
import LayoutV6 from "@/components/layouts/LayoutV6";
import { Helmet } from "react-helmet";

const Personalizedweddingcake = () => {
  return (
    <>
      <Helmet>
        <title>Our personalized wedding cake | Delightfluff</title>
        <meta
          name="description"
          content="From custom flavors to elegant designs, our wedding cakes are crafted to match your unique style and taste."
        />
      </Helmet>
      <LayoutV6
        breadCrumb="Personalized wedding cake"
        title="Personalized wedding cake"
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
                          className={`carousel-item product-item ${ProductCarouselData.innerCarousel[0].activeClass1}`}
                        >
                          <img
                            src={`assets/img/shop/${ProductCarouselData.innerCarousel[0].thumb}`}
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
                                  className={`item ${data.activeClass1}`}
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
                        <del>HKD 120.00</del>
                      </span>{" "}
                      <span>HKD 96.00</span>
                    </div>
                    <h4>
                      <strong>Short description</strong>
                    </h4>
                    <p>
                      With our personalized wedding cake, you can create a dream
                      centerpiece for your wedding, crafted to match every
                      couple&rsquo;s vision. With a unique design, exquisite
                      detailing, and custom flavors, each cake becomes a
                      remarkable masterpiece for your special day.
                    </p>
                    <h4>
                      <strong>
                        <strong>Long description</strong>
                      </strong>
                    </h4>
                    <p>
                      Our personalized wedding cakes reflect your taste and
                      style, making your wedding day even more special. Simply
                      contact our customer support team with your preferred
                      design and we will create a custom-made cake for your
                      wedding day at a competitive price. Whether you are
                      looking for a whimsical theme or a multi-tiered design,
                      our experts will bring your dream cake to life. You can
                      choose from a variety of flavors, intricate decorations,
                      and fillings that perfectly complement your wedding
                      celebrations.
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

export default Personalizedweddingcake;
