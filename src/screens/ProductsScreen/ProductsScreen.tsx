import { FC } from "react";
import httpServices from "@/services/http";
import ProductList from "@/components/ProductList/ProductList";
import Pagination from "@/components/Pagination/Pagination";
import FilterCategories from "@/components/FilterCategories/FilterCategories";

interface IParams {
  searchParams: { [key: string]: string | string[] | undefined };
}

const ProductsScreen: FC<IParams> = async ({
  searchParams,
}): Promise<JSX.Element> => {
  const { page = "1", category = "" } = searchParams;

  console.log("🚀 ~ category:", category);

  const responseProducts = await httpServices.getProducts({
    page: String(page),
    category: String(category),
  });
  const pageCount = responseProducts?.meta?.pagination.pageCount || 1;

  const responseCategories = await httpServices.getCategories();
  const allCategories = responseCategories ? responseCategories.data : [];

  return (
    <>
      <div>Products Screen 😎</div>

      <FilterCategories
        allCategories={allCategories}
        curentCategory={category}
      />
      {responseProducts && responseProducts.data.length > 0 && (
        <ProductList productList={responseProducts.data} />
      )}

      <Pagination pageCount={pageCount} forcePage={page} />
    </>
  );
};

//

export default ProductsScreen;
