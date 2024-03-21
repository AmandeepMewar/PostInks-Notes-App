import PostCard from "./PostCard";
import JSONdata from "../../data/data.json";

const PostGrid = () => {
  return (
    <div className="xl:columns-4  lg:columns-3 sm:columns-2">
      {JSONdata["data"].map((userData) => (
        <div
          key={userData.id}
          className="flex flex-col gap-4 break-inside-avoid mb-4"
        >
          <PostCard
            id={userData.id}
            title={userData.title}
            description={userData.description}
            days={userData.day}
            username={userData.username}
            img={userData.img}
          />
        </div>
      ))}
    </div>
  );
};

export default PostGrid;
