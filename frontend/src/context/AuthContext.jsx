import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuthContext must be used within the AuthProvider');
  }

  return context;
};

const AuthProvider = ({ children }) => {
  const [authDialog, setAuthDialog] = useState({
    signIn: false,
    signUp: false,
  });

  const authDialogHandler = ({ signIn, signUp }) => {
    setAuthDialog({ signIn, signUp });
  };

  return (
    <AuthContext.Provider
      value={{ authDialog, setAuthDialog, authDialogHandler }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuthContext };
