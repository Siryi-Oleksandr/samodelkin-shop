enum TypeArticles {
  Title = "articles.title-article",
  ContentImage = "articles.content-image",
  Content = "articles.content",
  Image = "articles.image",
}

// * About Us
interface IResponseAboutUs {
  data: {
    id: number;
    attributes: {
      content: TArticleGeneral[];
    };
  };
}

// * Category Description;
interface IResponseCategoryDescription {
  data: ICategoryDescription[];
}

interface ICategoryDescription {
  id: number;
  attributes: {
    category: {
      data: {
        id: number;
        attributes: {
          slug: string;
        };
      };
    };
    content: TArticleGeneral[];
  };
}

// * Product Description
interface IResponseProductDescription {
  data: IProductDescription[];
}

interface IProductDescription {
  id: number;
  attributes: {
    product: {
      data: {
        id: number;
        attributes: {
          slug: string;
        };
      };
    };
    content: TArticleGeneral[];
  };
}

// * General Type
type TArticleGeneral =
  | ITitleArticle
  | IContentImageArticle
  | IImageArticle
  | IContentImage;

interface ITitleArticle {
  id: number;
  __component: TypeArticles.Title;
  title: string;
  levelTitle: number;
}

interface IContentImageArticle {
  id: number;
  __component: TypeArticles.ContentImage;
  content: string;
  percentImage: number;
  reverseDirection: boolean;
  description: string;
  image: IImage;
}

interface IImageArticle {
  id: number;
  __component: TypeArticles.Content;
  content: string;
  description: string;
}

interface IContentImage {
  id: number;
  __component: TypeArticles.Image;
  description: string;
  image: IImage;
}
