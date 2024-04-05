import { Button } from '../ui';

const Header = () => {
  return (
    <header>
      <h1 className="flex justify-center p-5 text-5xl font-extrabold">
        PostInks
      </h1>
      <div className="flex gap-3 my-5">
        <Button className="w-24 bg-slate-300 rounded-md text-black px-3 py-1 text-center transition-transform active:scale-105 font-semibold">
          All Posts
        </Button>
        <Button className="w-24 bg-slate-300 rounded-md text-black px-3 py-1 text-center transition-transform active:scale-105 font-semibold">
          My Posts
        </Button>
      </div>
    </header>
  );
};

export default Header;
