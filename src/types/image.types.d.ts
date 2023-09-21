interface IResponseImages {
  data: IImage[];
}

interface IImage {
  id: number;
  attributes: IAttributesImage;
}

interface IAttributesImage {
  name: string;
  alternativeText: string;
  caption: any;
  width: number;
  height: number;
  formats: IFormatsImage;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: any;
  provider: string;
  createdAt: string;
  updatedAt: string;
}

interface IFormatsImage {
  thumbnail: IThumbnail;
}

interface IThumbnail {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: any;
  size: number;
  width: number;
  height: number;
}
