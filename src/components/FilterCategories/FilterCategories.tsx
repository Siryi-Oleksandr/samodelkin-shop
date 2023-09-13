"use client";

import { FC, ChangeEvent } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

interface IProps {
  allCategories: ICategorie[];
  curentCategory: string | string[];
}
const FilterCategories: FC<IProps> = ({ allCategories, curentCategory }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const objSearchParams = {} as ISearchParams;

  for (const [key, value] of searchParams) {
    objSearchParams[key] = value;
  }

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const category = event.target.value;

    const params = new URLSearchParams({
      ...objSearchParams,
      category,
    });

    params.delete("page");
    if (category === "") params.delete("category");

    router.push(`${pathname}?${params}`);
  };

  return (
    <label>
      Choose categorie:{" "}
      <select
        name="filterCategories"
        value={curentCategory}
        onChange={handleChange}
      >
        <option key="allCategories" value="">
          Всі категорії
        </option>
        {allCategories.map((elem) => {
          return (
            <option key={elem.id} value={elem.attributes.slug}>
              {elem.attributes.title}
            </option>
          );
        })}
      </select>
    </label>
  );
};

export default FilterCategories;
