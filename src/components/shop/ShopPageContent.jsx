import React from 'react';
import ProductData from "@/assets/jsonData/product/ProductData.json"
import SingleProductGrid from '@/components/product/SingleProductGrid';

const ShopPageContent = () => {
    return (
        <>
            <div className="validtheme-shop-area default-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="tab-content tab-content-info text-center" id="shop-tabContent">
                                <div className="tab-pane fade show active" id="grid-tab" role="tabpanel" aria-labelledby="grid-tab-control">
                                    <ul className="vt-products columns-4">
                                        {ProductData.map(product =>
                                            <SingleProductGrid product={product} key={product.id} />
                                        )}
                                    </ul>
                                </div>
                                {/* <div className="tab-pane fade" id="list-tab" role="tabpanel" aria-labelledby="list-tab-control">
                                    <ul className="vt-products colums-2">
                                        {ProductData.map(product =>
                                            <SingleProductList product={product} key={product.id} />
                                        )}
                                    </ul>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ShopPageContent;