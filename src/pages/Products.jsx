import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';
import ProductCard from '../components/ProductCard';

const Products = () => {
  const {
    data: products = [],
    isFetching,
    isLoading,
  } = useQuery({
    queryKey: ['products'],
    queryFn: () =>
      fetch('https://kinun.onrender.com/api/products').then(res => res.json()),
  });

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

  if (isLoading) return <LoadingSpinner />;

  return products.products.map(product => (
    <ProductCard key={product._id} product={product} />
  ));
};

export default Products;
