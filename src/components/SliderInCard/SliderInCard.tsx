"use client";
import { FC, useState } from "react";

import { Swiper, SwiperSlide, SwiperClass } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { SwiperOptions } from "swiper/types";
import Image from "next/image";

import style from "./SliderInCard.module.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./SliderInCard.css";

// import required modules

interface IProps {
  images: IImage[];
  title: string;
}

const SliderInCard: FC<IProps> = ({ images, title }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

  const option: SwiperOptions = {};

  return (
    <div className={style.wrapSectionSlider}>
      <h2>Custom Paging</h2>
      <div className={style.wrapSlider}>
        <Swiper
          // style={{
          //   "--swiper-navigation-color": "#fff",
          //   "--swiper-pagination-color": "#fff",
          // }}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
        >
          {images.map((element, ind) => {
            return (
              <SwiperSlide key={element.id}>
                <Image
                  priority={ind === 0}
                  className={style.image}
                  src={element.attributes.url}
                  alt={title}
                  height={500}
                  width={500}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          {images.map((element, ind) => {
            return (
              <SwiperSlide key={element.id}>
                <Image
                  priority={ind === 0}
                  // className={style.image}
                  src={element.attributes.url}
                  alt={title}
                  height={500}
                  width={500}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};
export default SliderInCard;
