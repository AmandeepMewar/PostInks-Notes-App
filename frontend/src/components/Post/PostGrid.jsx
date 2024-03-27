import { useEffect, useState } from 'react';
import PostCard from './PostCard';
// import JSONdata from "../../data/data.json";
import axios from 'axios';

const PostGrid = () => {
  const [postData, setPostData] = useState(null);

  useEffect(() => {
    axios
      .get('/api/v1/posts')
      .then((response) => {
        console.log(response.data.data.posts);
        setPostData(response.data.data.posts);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="xl:columns-4  lg:columns-3 sm:columns-2">
      {postData &&
        postData.map((data) => (
          <div
            key={data.id}
            className="flex flex-col gap-4 break-inside-avoid mb-4"
          >
            <PostCard
              id={data.id}
              title={data.title}
              description={data.description}
              days={data.day}
              username={data.username}
              img={data.img}
            />
          </div>
        ))}
    </div>
  );
};

export default PostGrid;
