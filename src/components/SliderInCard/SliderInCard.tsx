"use client";
import { FC } from "react";
import Slider from "react-slick";
import Img from "@/assets/no_images.png";
import Image from "next/image";
import style from "./SliderInCard.module.css";
import "./SliderInCard.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface IProps {
  images: IImage[];
  title: string;
}
const SliderInCard: FC<IProps> = ({ images, title }) => {
  const settings = {
    customPaging: function (i: number) {
      return (
        <a>
          <Image
            src={images[i].attributes.url}
            alt={title}
            height={48}
            width={48}
          />
        </a>
      );
    },
    dots: true,
    fade: true,
    dotsClass: "slick-dots slick-thumb slickThumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={style.wrapSectionSlider}>
      <h2>Custom Paging</h2>
      <div className={style.wrapSlider}>
        <Slider className={style.slickSlider} {...settings}>
          {images.map((element, ind) => {
            return (
              <div key={element.id}>
                <Image
                  priority={ind === 0}
                  className={style.image}
                  src={element.attributes.url}
                  alt={title}
                  height={500}
                  width={500}
                />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default SliderInCard;
