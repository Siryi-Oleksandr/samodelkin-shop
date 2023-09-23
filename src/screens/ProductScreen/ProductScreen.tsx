import { FC } from "react";
import httpServices from "@/services/http";
import Product from "@/components/Product/Product";
import SliderProducts from "@/components/SliderProducts/SliderProducts";

import style from "./ProductScreen.module.css";

interface IProps {
  slug: string;
}
const ProductScreen: FC<IProps> = async ({ slug }): Promise<JSX.Element> => {
  const responseProduct = await httpServices.getOneProducts(slug);
  const responseSalesLeaders = await httpServices.getSalesLeaders();
  return (
    <>
      <section>
        {responseProduct && responseProduct.data.length > 0 && (
          <Product product={responseProduct.data[0]} />
        )}
      </section>

      {responseSalesLeaders && responseSalesLeaders.data.length > 0 && (
        <section className={style.section}>
          <h2>Лідери продажу</h2>
          <SliderProducts productList={responseSalesLeaders.data} />
        </section>
      )}
    </>
  );
};

export default ProductScreen;
