import type { FC } from 'react';

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
}

const FilledButton: FC<Props> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="p-3 text-white bg-blue-600 hover:bg-blue-800 rounded-xl"
    >
      {children}
    </button>
  );
};

export default FilledButton;
