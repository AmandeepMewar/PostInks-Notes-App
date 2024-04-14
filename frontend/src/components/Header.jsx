import { Button } from '../ui';

const Header = () => {
  return (
    <header>
      <div className="flex justify-between pt-10">
        <h1 className="text-5xl font-extrabold">PostInks</h1>
        <div className="mr-5">
          <Button className="text-xl border-b-2 transition-transform hover:scale-110 ">
            Login
          </Button>
        </div>
      </div>
      <div className="flex gap-3 my-5">
        <Button className="w-24 bg-gray-400 rounded-md text-black px-3 py-1 text-center transition-transform hover:scale-105 font-semibold">
          All Posts
        </Button>
        <Button className="w-24 bg-slate-300 rounded-md text-black px-3 py-1 text-center transition-transform hover:scale-105 font-semibold">
          My Posts
        </Button>
      </div>
    </header>
  );
};

export default Header;
