import type { FC } from 'react';

interface Props {
  children: React.ReactNode;
}

const PostContainer: FC<Props> = ({ children }) => {
  return <div className="flex flex-col">{children}</div>;
};

export default PostContainer;
