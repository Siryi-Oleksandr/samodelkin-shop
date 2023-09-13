import React from "react";
import ProductScreen from "@/screens/ProductScreen/ProductScreen";

const Product = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  return <ProductScreen slug={slug} />;
};

export default Product;
