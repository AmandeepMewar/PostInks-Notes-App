import { useState } from 'react';
import axios from 'axios';
import { useAuthContext } from '../context/AuthContext';

const useLogout = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { authLogoutHandler } = useAuthContext();

  const logout = async () => {
    setIsLoading(true);

    try {
      const response = await axios.post('/api/v1/users/logout');
      if (response.status === 200) authLogoutHandler();
    } catch (err) {
      console.error('Logout failed:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return { logout, isLoading };
};

export default useLogout;
