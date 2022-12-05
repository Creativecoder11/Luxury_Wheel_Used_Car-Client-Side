import React from 'react';
import AdvertiseItem from '../../Components/AdvertiseItem/AdvertiseItem';
import Category from '../../Components/Category/Category';
import FeatureSection from '../../Components/FeatureSection/FeatureSection';
import Banner from '../Shared/Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <AdvertiseItem></AdvertiseItem>
            <FeatureSection></FeatureSection>
        </div>
    );
};

export default Home;