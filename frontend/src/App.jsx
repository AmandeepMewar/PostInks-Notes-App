import {} from 'react';
import './App.css';
import Layout from './layout/Layout';
import { PostProvider } from './context/PostContext';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <PostProvider>
        <Layout />
      </PostProvider>
    </AuthProvider>
  );
}

export default App;
