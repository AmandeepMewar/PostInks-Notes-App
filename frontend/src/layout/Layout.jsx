import { Container, Header, PostForm } from '../components';
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
    </div>
  );
};

export default Layout;
