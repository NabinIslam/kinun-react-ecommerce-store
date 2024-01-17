import React, { useContext, useState } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';
import ProductCard from '../components/ProductCard';
import { ApiUrlContext } from '../contexts/ApiUrlProvider';
import usePageTitle from '../hooks/usePageTitle';
import ProductSkeleton from '../loadingSkeletons/ProductSkeleton';

const Products = () => {
  const { data, loading } = useContext(ApiUrlContext);
  usePageTitle('Products');

  // const {
  //   data: products = [],
  //   isFetching,
  //   isLoading,
  // } = useQuery({
  //   queryKey: ['products'],
  //   queryFn: () => fetch(productApi).then(res => res.json()),
  // });

  // if (isFetching) return <LoadingSpinner />;
  if (loading) return <ProductSkeleton />;

  if (data?.products?.length === 0)
    return (
      <main>
        <h2 className="text-center text-xl mt-10">
          There is no product available in this category!
        </h2>
      </main>
    );

  return (
    <main className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {data?.products?.map(product => (
        <ProductCard key={product._id} product={product} />
      ))}
    </main>
  );
};

export default Products;
