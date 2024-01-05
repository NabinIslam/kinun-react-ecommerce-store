import { useEffect, useState } from 'react';
import axios from 'axios';

function useFetchProducts(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    fetch(url)
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => setError(err))
      .finally(() => setLoading(false));
  }, [url]);

  const refetch = () => {
    setLoading(true);
    axios
      .get(url)
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => setError(err))
      .finally(() => setLoading(false));
  };

  return { data, loading, error, refetch };
}

export default useFetchProducts;
