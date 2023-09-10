import { FC } from "react";
import httpServices from "@/services/http";
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
      {response &&
        response.data.length > 0 &&
        response.data.map((product) => {
          const { attributes } = product;
          return (
            <div key={product.id}>
              <p>{attributes.title}</p>
              <p>{attributes.countPlayers}</p>
              <p>{attributes.price}</p>
              <p>{attributes.descrition}</p>
            </div>
          );
        })}
      <Pagination pageCount={pageCount} forcePage={page} />
    </>
  );
};

//

export default ProductsScreen;
