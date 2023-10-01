import { FC } from "react";
import httpServices from "@/services/http";
import TitleAboutUsSection from "./TitleAboutUsSection/TitleAboutUsSection";
import ContentAboutUsSection from "./ContentAboutUsSection/ContentAboutUsSection";
import ContentWithImageAboutUsSection from "./ContentWithImageAboutUsSection/ContentWithImageAboutUsSection";
import ImageAboutUsSection from "./ImageAboutUsSection/ImageAboutUsSection";

import { TypeArticles } from "@/types/generalTypes/articles.type";
import style from "./AboutUsSection.module.css";

const AboutUsSection: FC = async (): Promise<JSX.Element> => {
  const responseAboutUs = await httpServices.getAboutUs();

  if (!responseAboutUs) return <></>;

  const aboutUs = responseAboutUs.data.attributes.content;

  return (
    <>
      <h2 className={style.titleSection}>Про нас</h2>
      <div className={style.wrapContent}>
        {aboutUs.map((element) => {
          if (element.__component === TypeArticles.Title)
            return <TitleAboutUsSection params={element} />;
          if (element.__component === TypeArticles.Content)
            return <ContentAboutUsSection params={element} />;
          if (element.__component === TypeArticles.Image)
            return <ImageAboutUsSection params={element} />;
          if (element.__component === TypeArticles.ContentImage)
            return <ContentWithImageAboutUsSection params={element} />;
        })}
      </div>
    </>
  );
};

export default AboutUsSection;
