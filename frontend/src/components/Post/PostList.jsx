import { useEffect, useState } from 'react';
import axios from 'axios';
import PostGrid from './PostGrid';
import Loader from '../../ui/Loader/Loader';
import { usePostContext } from '../../context/PostContext';

const PostList = () => {
  const { isUpdated } = usePostContext();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      setError(false);
      setLoading(true);
      const response = await axios.get('/api/v1/posts');
      setData(response.data.data.posts);
    } catch (err) {
      console.log(err);
      setError(true);
    }
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    fetchData();
  }, [isUpdated]);

  return (
    <div>
      {!loading ? (
        !error ? (
          <PostGrid posts={data} />
        ) : (
          <p>Something went wrong!</p>
        )
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default PostList;
