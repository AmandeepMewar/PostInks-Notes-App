import { Container, Header } from "../components";
import { FloatingBtn } from "../ui";

const Layout = () => {
  return (
    <div className="min-w-full min-h-screen relative">
      <Header />
      <Container />
      <FloatingBtn />
    </div>
  );
};

export default Layout;
