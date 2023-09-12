export interface IResponseCategories {
  data: ICategorie[];
  meta?: IMeta;
  error?: IError;
}

export interface ICategorie {
  id: number;
  attributes: IAttributesCategorie;
}

export interface IAttributesCategorie {
  title: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  locale: string;
}
