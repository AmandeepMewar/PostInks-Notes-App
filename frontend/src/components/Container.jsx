import { Button } from "../ui";
import PostGrid from "./Post/PostGrid";

const Container = () => {
  return (
    <div className="min-w-fit min-h-screen mx-5">
      <div className="flex gap-3 mb-5">
        <Button
          type="onClick"
          className="w-24 bg-slate-300 rounded-md text-black px-3 py-1 text-center transition-transform active:scale-105 font-semibold"
        >
          All Posts
        </Button>
        <Button
          type="onClick"
          className="w-24 bg-slate-300 rounded-md text-black px-3 py-1 text-center transition-transform active:scale-105 font-semibold"
        >
          My Posts
        </Button>
      </div>

      <PostGrid />
    </div>
  );
};

export default Container;
