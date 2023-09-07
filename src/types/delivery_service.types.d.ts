export interface IResponseDeliveryStatus {
  data: IDeliveryStatus[];
  meta?: IMeta;
  error?: IError;
  
}

export interface IDeliveryStatus {
  id: number;
  attributes: IAttributesDeliveryStatus;
}

export interface IAttributesDeliveryStatus {
  title: string;
  slug: string;
  active: boolean;
  createdAt: string;
  updatedAt: string;
  homeDelivery: boolean;
  postOfficeDelivery: boolean;
}
