import { Container, Header, PostForm } from '../components';
import SignIn from '../components/Auth/SignIn';
import SignUp from '../components/Auth/SignUp';
import DeletePost from '../components/Post/DeletePost';
import PostList from '../components/Post/PostList';
import { FloatingBtn } from '../ui';

const Layout = () => {
  return (
    <div className="min-w-full min-h-screen">
      <Container>
        <Header />
        <PostList />
        <PostForm />
        <DeletePost />
      </Container>

      <FloatingBtn />
      {/* <SignIn /> */}
      {/* <SignUp /> */}
    </div>
  );
};

export default Layout;
