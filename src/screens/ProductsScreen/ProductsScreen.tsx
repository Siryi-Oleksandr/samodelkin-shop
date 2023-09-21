import { FC } from "react";
import httpServices from "@/services/http";
import ProductList from "@/components/ProductList/ProductList";
import Pagination from "@/components/Pagination/Pagination";

interface IParams {
  searchParams: { [key: string]: string | string[] | undefined };
}

const ProductsScreen: FC<IParams> = async ({
  searchParams,
}): Promise<JSX.Element> => {
  const { page = "1", category = "" } = searchParams;

  const responseProducts = await httpServices.getProducts({
    page: String(page),
    category: String(category),
  });
  const pageCount = responseProducts?.meta?.pagination.pageCount || 1;

  return (
    <>
      <div>Products Screen 😎</div>

      {responseProducts && responseProducts.data.length > 0 && (
        <ProductList productList={responseProducts.data} />
      )}

      <Pagination pageCount={pageCount} forcePage={page} />
    </>
  );
};

//

export default ProductsScreen;
