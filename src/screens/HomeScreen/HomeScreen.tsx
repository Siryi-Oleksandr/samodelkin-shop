import { FC } from "react";
import style from "./HomeScreen.module.css";
import FilterPanel from "@/components/FilterPanel/FilterPanel";

interface IParams {
  params?: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

const HomeScreen: FC<IParams> = ({ searchParams }) => {
  return (
    <div className={style.wrapPage}>
      <div className={style.wrapFilter}>
        <FilterPanel searchParams={searchParams} />
      </div>
      <div className={style.wrapContent}>
        <p>HomeScreen</p>
        <p>HERO</p>
        <p>Type games</p>
        <p>sales leaders</p>
        <p>reviewers products</p>
        <p>Reviews.</p>
      </div>
    </div>
  );
};

export default HomeScreen;
