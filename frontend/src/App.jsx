import {} from 'react';
import './App.css';
import Layout from './layout/Layout';
import { PostProvider } from './context/PostContext';

function App() {
  return (
    <PostProvider>
      <Layout />
    </PostProvider>
  );
}

export default App;
