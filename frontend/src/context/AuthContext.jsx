import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuthContext must be used within the AuthProvider');
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

  const navigate = useNavigate();

  const authDataHandler = (userData) => {
    setAuthData({
      ...authData,
      loggedIn: true,
      fullname: userData.fullname,
      username: userData.username,
      avatar: userData.avatar,
      id: userData._id,
    });
  };

  const authLogoutHandler = () => {
    setAuthData({
      ...authData,
      loggedIn: false,
      fullname: null,
      username: null,
      avatar: null,
      id: null,
    });
  };

  const fetch = async () => {
    try {
      const response = await axios.get('/api/v1/users/getMe');
      authDataHandler(response.data.data.data);
    } catch (err) {
      navigate('/login');
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        authDataHandler,
        authData,
        authLogoutHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuthContext };
