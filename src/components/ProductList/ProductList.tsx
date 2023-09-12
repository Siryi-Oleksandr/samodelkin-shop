import { FC } from "react";
import ProductCard from "../ProductCard/ProductCard";
import style from "./ProductList.module.css";

interface IProps {
  productList: IProduct[];
}

const ProductList: FC<IProps> = ({ productList }) => {
  return (
    <ul className={style.listCard}>
      {productList.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ul>
  );
};

export default ProductList;
