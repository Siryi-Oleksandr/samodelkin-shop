"use client";

import { FC } from "react";
import ReactPaginate from "react-paginate";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

interface IParams {
  pageCount: number;
  forcePage: string | string[];
}
const Pagination: FC<IParams> = ({ pageCount, forcePage }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  console.log("🚀 ~ searchParams:", { ...searchParams });
  const pathname = usePathname();

  // const params = {} as IParamsTodo;
  //for (const [key, value] of searchParams.entries()) {
  //   params[key] = value;
  //}

  const handleClickPagination = ({ selected }: { selected: number }) => {
    console.log("Click pafination", selected, pathname);
    // router.push("/dashboard");
  };

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="next >"
      onPageChange={handleClickPagination}
      pageRangeDisplayed={5}
      pageCount={pageCount}
      previousLabel="< previous"
      renderOnZeroPageCount={null}
      forcePage={Number(forcePage) - 1}
    />
  );
};

export default Pagination;
