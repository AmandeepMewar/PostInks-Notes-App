import { Container, Header, PostForm } from '../components';

import DeletePost from '../components/Post/DeletePost';
import PostList from '../components/Post/PostList';
import { FloatingBtn } from '../ui';

const Layout = () => {
  const url = '/api/v1/posts';

  return (
    <div className="min-w-full min-h-screen">
      <Container className="min-h-screen mx-5 mb-8 ">
        <Header />
        <PostList url={url} />
        <PostForm />
        <DeletePost />
      </Container>

      <FloatingBtn />
    </div>
  );
};

export default Layout;
