import DownloadApp from '@/components/app/DownloadApp';
import BannerV4 from '@/components/banner/BannerV4';
import BlogV1 from '@/components/blog/BlogV1';
import ChefV1 from '@/components/chef/ChefV1';
import BodyDark from '@/components/classes/BodyDark';
import DealV1 from '@/components/deal/DealV1';
import FeatureV3 from '@/components/feature/FeatureV3';
import FoodCategoryV3 from '@/components/food/FoodCategoryV3';
import BusinessHours from '@/components/hours/BusinessHours';
import LayoutV1 from '@/components/layouts/LayoutV1';
import WhyChooseV1 from '@/components/whyChoose/WhyChooseV1';
import React from 'react';

const Home1Dark = () => {
    return (
        <>
            <LayoutV1>
                <BannerV4 />
                <FeatureV3 />
                <WhyChooseV1 />
                <DealV1 />
                <FoodCategoryV3 />
                <DownloadApp />
                <BusinessHours />
                <ChefV1 />
                <BlogV1 />
                <BodyDark />
            </LayoutV1>
        </>
    );
};

export default Home1Dark;