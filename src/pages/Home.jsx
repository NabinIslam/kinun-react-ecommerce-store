import React, { useContext } from 'react';
import Banner from '../components/Banner';
import FeaturedCategory from '../components/FeaturedCategory';
import Hero from '../components/Hero';
import TopRatedProducts from '../components/TopRatedProducts';
import usePageTitle from '../hooks/usePageTitle';
import { AuthContext } from '../contexts/AuthProvider';
import LoadingSpinner from '../components/LoadingSpinner';

const Home = () => {
  usePageTitle('E-commerce website');

  const categoryQuery = 'mobile';
  const brandQuery = 'samsung';

  const url = `https://kinun.onrender.com/api/products/?category=${categoryQuery}&brand=${brandQuery}`;

  console.log(url);
  return (
    <div>
      {/* <Banner /> */}
      <Hero />
      {/* <FeaturedCategory /> */}
      {/* <TopRatedProducts /> */}
    </div>
  );
};

export default Home;
