import React from 'react';
import Banner from '../components/Banner';
import FeaturedCategory from '../components/FeaturedCategory';
import Hero from '../components/Hero';
import TopRatedProducts from '../components/TopRatedProducts';

const Home = () => {
  return (
    <div>
      {/* <Banner /> */}
      <Hero />
      <FeaturedCategory />
      <TopRatedProducts />
    </div>
  );
};

export default Home;
