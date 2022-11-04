import { zodResolver } from '@hookform/resolvers/zod';
import type { SubmitHandler } from 'react-hook-form';
import { FormProvider, useForm } from 'react-hook-form';

import FilledButton from '../components/Button/Filled';
import FormInput from '../components/Form/Input';
import PostContainer from '../components/Post/Container';
import PostItem from '../components/Post/Item';
import DashboardLayout from '../layouts/Dashboard';
import type { PostCreateForm } from '../lib/models/post';
import { addPostSchema } from '../lib/models/post';
import { useAppDispatch, useAppSelector } from '../lib/store/hooks';
import { blogActions } from '../lib/store/slices/blog';

export default function Home() {
  const methods = useForm<PostCreateForm>({
    resolver: zodResolver(addPostSchema),
  });
  const dispatch = useAppDispatch();
  const blog = useAppSelector((state) => state.blog);

  const onSubmit: SubmitHandler<PostCreateForm> = (data) => {
    dispatch(blogActions.addPost(data));
  };

  const fetchBlog = () => {
    dispatch(blogActions.loadPosts());
  };

  return (
    <DashboardLayout>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="m-3 flex flex-col"
        >
          <FormInput name="title" type="text" placeholder="Type your Title" />
          <FormInput name="body" type="text" placeholder="Type your Content" />
          <FilledButton>Add Blog</FilledButton>
        </form>
      </FormProvider>

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
