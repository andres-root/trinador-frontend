import React, { useEffect, useState } from 'react';
import axios from 'axios';


const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(url, {
        headers: {
          'Authorization': 'Token 6b632d794bd9db2e5527bffb9c1c8e1cca237018',
        }
      })
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        setError(err)
      }).finally(() => {
        setLoading(false);
      });
  }, [url]);
  
  return {
    data,
    loading,
    error,
  };
};

export default useFetch;