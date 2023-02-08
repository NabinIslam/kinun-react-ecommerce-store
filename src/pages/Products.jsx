import { useQuery } from '@tanstack/react-query';
import React, { useReducer } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';
import ProductCard from '../components/ProductCard';
import { actionTypes } from '../state/product-state/actionTypes';
import {
  initialState,
  productReducer,
} from '../state/product-state/ProductReducer';

const Products = () => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  console.log(state);

  const {
    data: products = [],
    isLoading,
    isFetching,
    refetch,
  } = useQuery({
    queryKey: ['products'],
    queryFn: () =>
      fetch('https://kinun-server.vercel.app/products').then(res => res.json()),
  });

  let content;

  if (isFetching) {
    return <LoadingSpinner />;
  }

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (state.default && state.lowToHigh === false && state.highToLow === false) {
    content = products.map(product => (
      <ProductCard key={product._id} product={product} />
    ));
  }

  if (state.default === false && state.lowToHigh && state.highToLow === false) {
    content = products
      .sort((a, b) => a.price - b.price)
      .map(product => <ProductCard key={product.id} product={product} />);
  }

  if (state.default === false && state.lowToHigh === false && state.highToLow) {
    content = products
      .sort((a, b) => b.price - a.price)
      .map(product => <ProductCard key={product.id} product={product} />);
  }

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
                Price (Hign to Low)
              </option>
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
