import { FC, ReactNode } from "react";

interface IProps {
  children: ReactNode;
}
const Loading: FC<IProps> = ({ children }) => {
  // You can add any UI inside Loading, including a Skeleton.
  return <>{children}</>;
};

export default Loading;
