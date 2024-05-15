import { useState } from 'react';
import axios from 'axios';

const useLogout = () => {
  const [isLoading, setIsLoading] = useState(false);

  const logout = async () => {
    setIsLoading(true);

    try {
      await axios.get('/api/v1/users/logout');
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return { logout, isLoading };
};

export default useLogout;
