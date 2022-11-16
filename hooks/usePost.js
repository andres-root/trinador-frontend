import React, { useEffect, useState } from 'react';
import axios from 'axios';


const usePost = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .post(url, data, {
        headers: {
          'Authorization': 'Token 52f97b98e50d36c9194cbc6cfc27f1776f856419',
        },
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

export default usePost;