import PostCard from './PostCard';

const PostGrid = ({ posts }) => {
  return (
    <>
      <div className="xl:columns-4  lg:columns-3 sm:columns-2">
        {posts && posts.length ? (
          posts.map((post, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 break-inside-avoid mb-4"
            >
              <PostCard picId={index} post={post} />
            </div>
          ))
        ) : (
          <p>No data found!</p>
        )}
      </div>
    </>
  );
};

export default PostGrid;
