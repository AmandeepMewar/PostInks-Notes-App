import {} from 'react';
import './App.css';
import Layout from './layout/Layout';
import { PostProvider } from './context/PostContext';
import { AuthProvider } from './context/AuthContext';
import Login from './pages/Login/Login';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Signup from './pages/Signup/Signup';
import MyPosts from './pages/MyPosts/MyPosts';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <PostProvider>
          <Routes>
            <Route path="/" element={<Layout />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/myposts" element={<MyPosts />} />
            {/* <Route path="/Error404" element={<Error404 />} /> */}
          </Routes>
        </PostProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
