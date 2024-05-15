import { useState } from 'react';
import axios from 'axios';

const useSignup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const signup = async (data) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post('/api/v1/users/signup', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (err) {
      console.log(err);
      setError(err.response.data);
    } finally {
      setIsLoading(false);
    }
  };

  return { signup, error, isLoading };
};

export default useSignup;
