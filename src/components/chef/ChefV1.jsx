import React from 'react';
import ChefV1Data from "@/assets/jsonData/chef/ChefV1Data.json"
import SingleChefV1 from './SingleChefV1';

const ChefV1 = () => {
    return (
        <>
            <div className="chef-area default-padding bg-gray text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                        </div>
                    </div>
                    <div className="row">
                        {ChefV1Data.slice(0, 3).map(chef =>
                            <div className="col-xl-4 col-lg-6" key={chef.id}>
                                <SingleChefV1 chef={chef} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChefV1;