import { useEffect, useState } from 'react';
import axios from 'axios';
import PostGrid from './PostGrid';
import Loader from '../../ui/Loader/Loader';
import { usePostContext } from '../../context/PostContext';

const PostList = ({ url }) => {
  const { isUpdated } = usePostContext();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    setError(false);
    setLoading(true);
    try {
      const response = await axios.get(url);
      setData(response.data.data.posts);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
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
