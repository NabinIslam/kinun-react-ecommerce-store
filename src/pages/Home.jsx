import Hero from '../components/Hero';
import FeaturedBrands from '../components/FeaturedBrands';

import usePageTitle from '../hooks/usePageTitle';
import FeaturedProducts from '../components/FeaturedProducts';

const Home = () => {
  usePageTitle('E-commerce website');

  return (
    <div>
      {/* <Banner /> */}
      <Hero />
      <FeaturedBrands />
      <FeaturedProducts />
      {/* <FeaturedCategory /> */}
      {/* <TopRatedProducts /> */}
    </div>
  );
};

export default Home;
