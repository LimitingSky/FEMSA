import { useEffect, useState } from 'react';
import { useFetch } from 'src/core/api';

const useFetchList = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [, isFetching, handleFetch, error] = useFetch({
    path: '/products',
    method: 'GET',
  });

  const parseData = () => {};

  const init = async () => {
    try {
      const response = handleFetch();
      console.log(response);
    } catch (error) {}
  };

  useEffect(() => {
    init();
  }, []);

  useEffect(() => {
    setIsLoading(isFetching);
  }, [isFetching]);

  return {isLoading};
};
