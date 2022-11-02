import type { FC } from 'react';

interface Props {
  children: React.ReactNode;
}

const DashboardLayout: FC<Props> = ({ children }) => {
  return <div className="grid grid-cols-3">{children}</div>;
};

export default DashboardLayout;
