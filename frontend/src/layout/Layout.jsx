import { Header } from "../components";
import { FloatingBtn } from "../ui";

const Layout = () => {
  return (
    <div className=" min-w-full min-h-full">
      <Header />
      <div>
        <FloatingBtn />
      </div>
    </div>
  );
};

export default Layout;
