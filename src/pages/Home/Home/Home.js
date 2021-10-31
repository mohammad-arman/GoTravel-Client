import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Offer from '../Offer/Offer';
import TouristSpots from '../TouristSpots/TouristSpots';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <TouristSpots></TouristSpots>
           <About></About>
           <Offer></Offer>
        </div>
    );
};

export default Home;