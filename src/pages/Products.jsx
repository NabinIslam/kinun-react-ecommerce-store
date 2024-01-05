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
