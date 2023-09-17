import React, { FC, Suspense } from "react";
import ProductScreen from "@/screens/ProductScreen/ProductScreen";
import Loading from "./loading";

interface IProps {
  params: { slug: string };
}
const Product: FC<IProps> = ({ params }) => {
  const { slug } = params;  
  return (
    <>
      <Suspense fallback={<Loading />}>
        <ProductScreen slug={slug} />
      </Suspense>
    </>
  );
};

export default Product;
