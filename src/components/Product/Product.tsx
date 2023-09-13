import { FC } from "react";
import NavigateToBack from "../NavigateToBack/NavigateToBack";
import style from "./Product.module.css";
interface IProps {
  product: IProduct;
}

const Product: FC<IProps> = ({ product }) => {
  const { attributes } = product;
  return (
    <>
      <NavigateToBack />
      <p>Product</p>
      <div className={style.wrapInformation}>
        <p>Images</p>
        <div>
          <h1>{attributes.title}</h1>
          <p>
            code: <span>{attributes.code}</span>
          </p>
          <p>
            countPlayers: <span>{attributes.countPlayers}</span>
          </p>
          <p>
            price: <span>{attributes.price}</span>
          </p>
          <p>
            available: <span>{attributes.available}</span>
          </p>
        </div>
        <div>
          <p> Additional informayion</p>
        </div>
      </div>
    </>
  );
};

export default Product;
