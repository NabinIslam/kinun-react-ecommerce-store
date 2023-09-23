import { useQuery } from '@tanstack/react-query';
import React, { useReducer } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';
import ProductCard from '../components/ProductCard';

const Products = () => {
  const {
    data: products = [],
    isFetching,
    refetch,
  } = useQuery({
    queryKey: ['products'],
    queryFn: () =>
      fetch('https://fakestoreapi.com/products').then(res => res.json()),
  });

  let content;

  if (isFetching) return <LoadingSpinner />;

  return (
    <div>
      <div className="bg-white px-2 mb-2 flex items-center justify-between rounded-lg shadow">
        <h2 className="text-lg font-bold">Products</h2>
        <div className="flex items-center">
          <p className="font-bold">Sort By: </p>
          <form action="">
            <select className="border-none pr-8">
              <option onChange={() => dispatch({ type: actionTypes.DEFAULT })}>
                Default
              </option>
              <option
                onChange={() => dispatch({ type: actionTypes.LOW_TO_HIGH })}
              >
                Price (Low to High)
              </option>
              <option
                onChange={() => dispatch({ type: actionTypes.HIGH_TO_LOW })}
              >
                Price (High to Low)
              </option>
            </select>
          </form>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
