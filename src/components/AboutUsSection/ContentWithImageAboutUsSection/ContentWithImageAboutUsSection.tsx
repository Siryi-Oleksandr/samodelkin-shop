import { IContentImageArticle } from "@/types/articles.type";
import { FC } from "react";
import style from "./ContentWithImageAboutUsSection.module.css";

interface IProps {
  params: IContentImageArticle;
}

const ContentWithImageAboutUsSection: FC<IProps> = ({ params }) => {
  return (
    <div className={style.wrapContent} data-reverse={params.reverseDirection}>
      <div
        className={style.wrapText}
        style={{ width: `${100 - params.percentImage}%` }}
      >
        {params.content}
      </div>
      <div
        className={style.wrapImage}
        style={{ width: `${params.percentImage}%` }}
      >
        {params.image.data.attributes.url}
      </div>
    </div>
  );
};

export default ContentWithImageAboutUsSection;
