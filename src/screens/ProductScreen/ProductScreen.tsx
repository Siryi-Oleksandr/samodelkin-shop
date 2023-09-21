import { FC } from "react";
import httpServices from "@/services/http";
import Product from "@/components/Product/Product";

interface IProps {
  slug: string;
}
const ProductScreen: FC<IProps> = async ({ slug }): Promise<JSX.Element> => {
  const responseProduct = await httpServices.getOneProducts(slug);
  return (
    <>
      {responseProduct && responseProduct.data.length > 0 && (
        <Product product={responseProduct.data[0]} />
      )}
    </>
  );
};

export default ProductScreen;
