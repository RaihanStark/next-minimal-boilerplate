import FilledButton from '../components/Button/Filled';
import PostContainer from '../components/Post/Container';
import PostItem from '../components/Post/Item';
import { useAppDispatch, useAppSelector } from '../lib/store/hooks';
import { blogActions } from '../lib/store/slices/blog';

export default function Home() {
  const dispatch = useAppDispatch();
  const blog = useAppSelector((state) => state.blog);
  const fetchBlog = () => {
    dispatch(blogActions.loadPosts());
  };

  return (
    <PostContainer>
      <FilledButton onClick={fetchBlog}>Fetch Blog</FilledButton>
      {blog.isLoading && <p className="text-center">Loading...</p>}
      {blog.posts.map((post) => (
        <PostItem post={post} key={post.id} />
      ))}
    </PostContainer>
  );
}
