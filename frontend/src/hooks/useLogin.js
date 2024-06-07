import { useState } from 'react';
import axios from 'axios';

const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = async (data) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.post('/api/v1/users/login', data);
      return response.data;
    } catch (err) {
      setError(err.response.data);
    } finally {
      setIsLoading(false);
    }
  };

  return { login, error, isLoading };
};

export default useLogin;
