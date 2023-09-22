import { FC } from "react";
import ProductCard from "@/components/ProductCard/ProductCard";
import style from "./SliderProducts.module.css";

interface IProps {
  productList: IProduct[];
}

const SliderProducts: FC<IProps> = ({ productList }) => {
  return (
    <ul>
      {productList.map((product) => (
        <li key={product.id} className={style.elementCard}>
          <ProductCard product={product} />
        </li>
      ))}
    </ul>
  );
};

export default SliderProducts;
