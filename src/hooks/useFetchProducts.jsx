import { useEffect, useState } from 'react';

function useFetchProducts(url, query = '') {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    fetch(url + query)
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => setError(err))
      .finally(() => setLoading(false));
  }, [url, query]);

  const refetch = () => {
    setLoading(true);
    fetch(url)
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => setError(err))
      .finally(() => setLoading(false));
  };

  return { data, loading, error, refetch };
}

export default useFetchProducts;
