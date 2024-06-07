import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext();

const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthContext must be used within an AuthProvider');
  }
  return context;
};

const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState({
    loggedIn: false,
    fullname: null,
    username: null,
    avatar: null,
    id: null,
  });

  const authDataHandler = (userData) => {
    setAuthData({
      loggedIn: true,
      fullname: userData.fullname,
      username: userData.username,
      avatar: userData.avatar,
      id: userData._id,
    });
  };

  const authLogoutHandler = () => {
    setAuthData({
      loggedIn: false,
      fullname: null,
      username: null,
      avatar: null,
      id: null,
    });
  };

  const checkAuthStatus = async () => {
    try {
      const response = await axios.get('/api/v1/users/getMe');
      authDataHandler(response.data.data.data);
    } catch (err) {
      authLogoutHandler();
    }
  };

  useEffect(() => {
    checkAuthStatus();
  }, []);

  return (
    <AuthContext.Provider
      value={{ authData, authDataHandler, authLogoutHandler }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuthContext };
