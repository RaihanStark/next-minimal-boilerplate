import type { FC } from 'react';

import type { Post } from '../../lib/models/post';

interface Props {
  post: Post;
}

const PostItem: FC<Props> = ({ post }) => {
  return (
    <div key={post.id} className="bg-slate-300 m-3 py-3 px-5 rounded-lg">
      <h1 className="text-2xl font-bold">{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export default PostItem;
