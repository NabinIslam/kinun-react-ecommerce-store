import { useQuery } from '@tanstack/react-query';
import React from 'react';
import LoadingSpinner from '../components/LoadingSpinner';

const Dashboard = () => {
  const {
    data: products = [],
    isFetching,
    isLoading,
  } = useQuery({
    queryKey: ['products'],
    queryFn: () =>
      fetch('https://kinun.onrender.com/api/products').then(res => res.json()),
  });

  if (isLoading) return <LoadingSpinner />;

  return (
    <main>
      <h4 className="font-bold text-2xl mb-10">Dashboard</h4>
      <div>
        <h5 className='text-xl'>Total products: {products.products.length}</h5>
      </div>
    </main>
  );
};

export default Dashboard;
