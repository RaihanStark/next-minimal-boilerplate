import classNames from 'classnames';
import type { FC } from 'react';

interface Props {
  children: React.ReactNode;
  className?: string;
}

const PostContainer: FC<Props> = ({ children, className = '' }) => {
  return (
    <div className={classNames('flex flex-col', ...className.split(' '))}>
      {children}
    </div>
  );
};

export default PostContainer;
