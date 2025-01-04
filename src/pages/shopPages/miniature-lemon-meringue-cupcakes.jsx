import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Autoplay } from "swiper/modules";
import ProductCarouselData from "@/assets/jsonData/product/ProductCarouselData.json";
import { Link } from "react-router-dom";
import ShopProductTab from "@/components/product/ShopProductTab";
import RelatedProducts from "@/components/product/RelatedProducts";
import LayoutV6 from "@/components/layouts/LayoutV6";
import { Helmet } from "react-helmet";

const Miniaturelemonmeringuecupcakes = () => {
  return (
    <>
      <Helmet>
        <title>Miniature lemon meringue cupcakes | Delightfluff</title>
        <meta
          name="description"
          content="Savor the perfect balance of sweet meringue and tangy lemon with our mini lemon meringue cupcakes. Perfect refreshing dessert option for any occasion."
        />
      </Helmet>
      <LayoutV6
        breadCrumb="Miniature lemon meringue cupcakes"
        title="Miniature lemon meringue cupcakes"
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
                          className={`carousel-item product-item ${ProductCarouselData.innerCarousel[6].activeClass7}`}
                        >
                          <img
                            src={`assets/img/shop/${ProductCarouselData.innerCarousel[6].thumb}`}
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
                        <del>HKD 50.00</del>
                      </span>{" "}
                      <span>HKD 40.00</span>
                    </div>
                    <h4>
                      <strong>Short description</strong>
                    </h4>
                    <p>
                      Delight in our bite-sized lemon meringue cupcakes,
                      featuring tangy lemon curd filling, zesty lemon sponge
                      along with caramelized, fluffy meringue toppings – enjoy a
                      refreshing burst of citrus in every bite.
                    </p>
                    <h4>
                      <strong>
                        <strong>Long description</strong>
                      </strong>
                    </h4>
                    <p>
                      Explore in the bright flavors of our miniature lemon
                      cupcakes, a citrusy delight in a sweet little indulgence.
                      Each of our baked cupcakes have a zesty and soft lemon
                      sponge filling along with lemon curd that harmonizes
                      refreshing tartness with sweet perfection. These cakes are
                      visually stunning, crowned with a swirl of caramelized
                      golden meringue, making them a perfect dessert that
                      satisfies your cravings for dessert. Perfect for afternoon
                      tea parties or small events that offer a refreshing bite
                      of zesty flavor.
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

export default Miniaturelemonmeringuecupcakes;
