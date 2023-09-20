import { FC } from "react";
import NavigateToBack from "../NavigateToBack/NavigateToBack";
import SliderInCard from "../SliderInCard_DELETE/SliderInCard";
import style from "./Product.module.css";
import Image from "next/image";
import ImgNoImage from "@/assets/no_images.png";
import ButtonsCardProduct from "../ButtonsCardProduct/ButtonsCardProduct";

interface IProps {
  product: IProduct;
}

const Product: FC<IProps> = ({ product }) => {
  const { attributes } = product;

  const images = attributes.images?.data;

  return (
    <>
      <NavigateToBack />
      <div className={style.wrapInformation}>
        <div className={style.wrapImage}>
          {!images && (
            <Image className={style.image} src={ImgNoImage} alt="No image" />
          )}
          {images && images.length === 1 && (
            <Image
              className={style.image}
              src={images[0].attributes.url}
              alt={attributes.title}
              height={0}
              width={500}
            />
          )}
          {images && images.length > 1 && (
            <div>
              <p>Carusele image</p>
              <SliderInCard />
            </div>
          )}
        </div>

        <div className={style.wrapProductInformation}>
          <h1 className={style.title}>{attributes.title}</h1>
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

          <ButtonsCardProduct product={product} />
        </div>
      </div>
      <div>
        <p> Additional informayion</p>
      </div>
    </>
  );
};

export default Product;
