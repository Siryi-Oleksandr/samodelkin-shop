import { IImageArticle } from "@/types/articles.type";
import { FC } from "react";
interface IProps {
  params: IImageArticle;
}

const ImageAboutUsSection: FC<IProps> = ({ params }) => {
  return <div>{params.image.data.attributes.url}</div>;
};

export default ImageAboutUsSection;
