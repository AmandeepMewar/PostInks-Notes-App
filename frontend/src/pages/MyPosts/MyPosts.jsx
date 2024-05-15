import { Container, Header, PostForm } from '../../components';
import DeletePost from '../../components/Post/DeletePost';
import PostList from '../../components/Post/PostList';
import { FloatingBtn } from '../../ui';
import { useAuthContext } from '../../context/AuthContext';

const MyPosts = () => {
  const { authData } = useAuthContext();

  const url = `/api/v1/posts/${authData.id}`;
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

export default MyPosts;
