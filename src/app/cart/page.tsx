import { FC } from "react";
import Cart from "@/screens/Cart/Cart";
import MainLoader from "@/components/MainLoader/MainLoader";

const PageCart: FC = () => {
  return (
    <>
      <Cart />
      <MainLoader />
    </>
  );
};

export default PageCart;
