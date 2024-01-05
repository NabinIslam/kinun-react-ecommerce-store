import { useQuery } from '@tanstack/react-query';
import { createContext, useState } from 'react';
import useFetchProducts from '../hooks/useFetchProducts';

export const ApiUrlContext = createContext();

const ApiUrlProvider = ({ children }) => {
  const [productApi, setProductApi] = useState(
    `https://kinun.onrender.com/api/products`
  );
  const [query, setQuery] = useState('');

  const { data, loading } = useFetchProducts(productApi, query);

  // const {
  //   data: products = [],
  //   isFetching,
  //   isLoading,
  //   refetch,
  // } = useQuery({
  //   queryKey: ['products'],
  //   queryFn: () => fetch(productApi).then(res => res.json()),
  // });

  const value = {
    productApi,
    setProductApi,
    query,
    setQuery,
    data,
    loading,
  };

  return (
    <ApiUrlContext.Provider value={value}>{children}</ApiUrlContext.Provider>
  );
};

export default ApiUrlProvider;
