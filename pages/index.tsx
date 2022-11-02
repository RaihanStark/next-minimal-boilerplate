import FilledButton from '../components/Button/Filled';
import PostContainer from '../components/Post/Container';
import PostItem from '../components/Post/Item';
import DashboardLayout from '../layouts/Dashboard';
import { useAppDispatch, useAppSelector } from '../lib/store/hooks';
import { blogActions } from '../lib/store/slices/blog';

export default function Home() {
  const dispatch = useAppDispatch();
  const blog = useAppSelector((state) => state.blog);
  const fetchBlog = () => {
    dispatch(blogActions.loadPosts());
  };

  return (
    <DashboardLayout>
      <div className="m-3 flex flex-col">
        <input
          type="text"
          name="Title"
          id="title"
          placeholder="Type your Title"
        />
        <input
          type="text"
          name="Content"
          id="content"
          placeholder="Type your Content"
        />
        <FilledButton onClick={fetchBlog}>Add Blog</FilledButton>
      </div>

      <PostContainer className="col-span-2">
        <FilledButton onClick={fetchBlog}>Fetch Blog</FilledButton>
        {blog.isLoading && <p className="text-center">Loading...</p>}
        {blog.posts.map((post) => (
          <PostItem post={post} key={post.id} />
        ))}
      </PostContainer>
    </DashboardLayout>
  );
}
