import { useState } from 'react';
import axios from 'axios';
import { useAuthContext } from '../context/AuthContext';

const useLogout = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { authLogoutHandler } = useAuthContext();

  const logout = async () => {
    setIsLoading(true);

    try {
      await axios.get('/api/v1/users/logout');
      authLogoutHandler();
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return { logout, isLoading };
};

export default useLogout;
