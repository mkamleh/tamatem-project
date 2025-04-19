import { IGetAllRequest } from "../interface";

export interface IProduct {
  id: number;
  productId: number;
  price: string;
  location: string;
  title: string;
  description: string;
}

export interface IGetProductById {
  productId: number;
}

export interface IGetAllProductsRequest extends IGetAllRequest {}
