import React, { useContext, useState } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';
import ProductCard from '../components/ProductCard';
import { ApiUrlContext } from '../contexts/ApiUrlProvider';

const Products = () => {
  const { productApi, data, loading } = useContext(ApiUrlContext);

  // const {
  //   data: products = [],
  //   isFetching,
  //   isLoading,
  // } = useQuery({
  //   queryKey: ['products'],
  //   queryFn: () => fetch(productApi).then(res => res.json()),
  // });

  const [lowest, setLowest] = useState(false);
  const [highest, setHighest] = useState(false);
  const [normal, setNormal] = useState(false);

  const handleProductFilter = event => {
    event.preventDefault();

    event.target.value === 'lowest' ? setLowest(true) : setLowest(false);
    event.target.value === 'highest' ? setHighest(true) : setHighest(false);
    event.target.value === 'normal' ? setNormal(true) : setNormal(false);
  };

  // let content = products.products.map(product => (
  //   <ProductCard key={product._id} product={product} />
  // ));

  // lowest
  //   ? (content = products.products
  //       .sort((a, b) => a.price - b.price)
  //       .map(product => <ProductCard key={product._id} product={product} />))
  //   : lowest;

  // highest
  //   ? (content = products.products
  //       .sort((a, b) => b.price - a.price)
  //       .map(product => <ProductCard key={product._id} product={product} />))
  //   : highest;

  // normal
  //   ? (content = products.products.map(product => (
  //       <ProductCard key={product._id} product={product} />
  //     )))
  //   : normal;

  // if (isFetching) return <LoadingSpinner />;
  if (loading) return <LoadingSpinner />;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {data.products.map(product => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};

export default Products;
