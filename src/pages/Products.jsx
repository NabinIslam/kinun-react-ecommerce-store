import { useQuery } from '@tanstack/react-query';
import React, { useReducer, useState } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';
import ProductCard from '../components/ProductCard';

const Products = () => {
  const [lowest, setLowest] = useState(false);
  const [highest, setHighest] = useState(false);
  const [defaul, setDefault] = useState(false);

  const {
    data: products = [],
    isFetching,
    refetch,
  } = useQuery({
    queryKey: ['products'],
    queryFn: () =>
      fetch('https://fakestoreapi.com/products').then(res => res.json()),
  });

  const handleProductFilter = event => {
    event.preventDefault();

    event.target.value === 'lowest' ? setLowest(true) : setHighest(false);
    event.target.value === 'highest' ? setHighest(true) : setLowest(false);
    event.target.value === 'default' ? setLowest(false) : setHighest(false);
  };

  let content = products.map(product => (
    <ProductCard key={product.id} product={product} />
  ));

  lowest
    ? (content = products.map(product => (
        <ProductCard key={product.id} product={product} />
      )))
    : lowest;

  if (isFetching) return <LoadingSpinner />;

  return (
    <div>
      <div className="bg-white px-2 mb-2 flex items-center justify-between rounded-lg shadow">
        <h2 className="text-lg font-bold">Products</h2>
        <div className="flex items-center">
          <p className="font-bold">Sort By: </p>
          <form action="">
            <select className="border-none pr-8" onChange={handleProductFilter}>
              <option value="default">Default</option>
              <option value="lowest">Price (Low to High)</option>
              <option value="highest">Price (High to Low)</option>
            </select>
          </form>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {content}
      </div>
    </div>
  );
};

export default Products;
