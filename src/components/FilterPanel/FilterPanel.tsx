import { FC } from "react";
import httpServices from "@/services/http";
import FilterCategories from "../FilterCategories/FilterCategories";

interface IParams {
  params?: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

const FilterPanel: FC<IParams> = async ({
  searchParams,
}): Promise<JSX.Element> => {
  const { category = "" } = searchParams;
  const responseCategories = await httpServices.getCategories();
  const allCategories = responseCategories ? responseCategories.data : [];
  console.log("🚀 ~ allCategories:", allCategories);

  return (
    <>
      <FilterCategories
        allCategories={allCategories}
        curentCategory={category}
      />
    </>
  );
};

export default FilterPanel;
