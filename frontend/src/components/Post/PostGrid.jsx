import PostCard from './PostCard';

const PostGrid = ({ posts }) => {
  return (
    <>
      <div className="xl:columns-4 lg:columns-3 sm:columns-2">
        {posts && posts.length
          ? posts.map((post, index) => (
              <div
                key={index}
                className="flex flex-col gap-4 break-inside-avoid mb-4"
              >
                <PostCard post={post} />
              </div>
            ))
          : null}
      </div>

      {!posts || !posts.length ? (
        <div className="min-w-screen min-h-screen text-center">
          <h2 className="text-4xl font-bold">No data found!</h2>
        </div>
      ) : null}
    </>
  );
};

export default PostGrid;
