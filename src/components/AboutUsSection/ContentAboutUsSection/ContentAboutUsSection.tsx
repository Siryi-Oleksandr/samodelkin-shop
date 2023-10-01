import { IContentArticle } from "@/types/articles.type";
import { FC } from "react";
interface IProps {
  params: IContentArticle;
}

const ContentAboutUsSection: FC<IProps> = ({ params }) => {
  return <div>{params.content}</div>;
};

export default ContentAboutUsSection;
