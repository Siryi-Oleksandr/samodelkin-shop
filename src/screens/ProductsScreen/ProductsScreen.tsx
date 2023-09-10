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
  const { page = "1" } = searchParams;
  const response = await httpServices.getProducts({ page: String(page) });
  const pageCount = response?.meta?.pagination.pageCount || 1;

  return (
    <>
      <div>Products Screen 😎</div>
      <p>{`Page: ${page}`}</p>

      {response && response.data.length > 0 && (
        <ProductList productList={response.data} />
      )}

      <Pagination pageCount={pageCount} forcePage={page} />
    </>
  );
};

//

export default ProductsScreen;
