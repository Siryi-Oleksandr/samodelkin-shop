import { FC } from "react";
import httpServices from "@/services/http";

const AboutUsSection: FC = async (): Promise<JSX.Element> => {
  const responseAboutUs = await httpServices.getAboutUs();

  if (!responseAboutUs) return <></>;
  const aboutUs = responseAboutUs.data.attributes.content;

  return (
    <>
      <h1>About us</h1>
      {aboutUs.map((element) => {
        if (element.__component === TypeArticles.Title) return <>title</>;
        if (element.__component === TypeArticles.Content) return <>title</>;
        if (element.__component === TypeArticles.Image) return <>title</>;
        if (element.__component === TypeArticles.ContentImage)
          return <>title</>;
      })}
      <h2>About Us</h2>
      <p>Content about us</p>
    </>
  );
};

export default AboutUsSection;
