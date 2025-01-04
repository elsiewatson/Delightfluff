import React from "react";
import ProductReviewForm from "../form/ProductReviewForm";
import { Link } from "react-router-dom";

const ShopProductTab = () => {
  return (
    <>
      <div className="single-product-bottom-info">
        <div className="row">
          <div className="col-lg-12">
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
              <button
                className="nav-link active"
                id="description-tab-control"
                data-bs-toggle="tab"
                data-bs-target="#description-tab"
                style={{ cursor: "default" }}
                role="tab"
                aria-controls="description-tab"
                aria-selected="true"
              >
                Long Description
              </button>
            </div>

            <div className="tab-content tab-content-info" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="description-tab"
                role="tabpanel"
                aria-labelledby="description-tab-control"
              >
                <p>
                  Our personalized wedding cakes reflect your taste and style,
                  making your wedding day even more special. Simply contact our
                  customer support team with your preferred design and we will
                  create a custom-made cake for your wedding day at a
                  competitive price. Whether you are looking for a whimsical
                  theme or a multi-tiered design, our experts will bring your
                  dream cake to life. You can choose from a variety of flavors,
                  intricate decorations, and fillings that perfectly complement
                  your wedding celebrations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopProductTab;
