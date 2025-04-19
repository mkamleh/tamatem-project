import request from "@/config/request";
import { IGetAllProductsRequest, IGetProductById, IProduct } from "./interface";
import { IPaginatedResponse } from "../interface";

const prefix = "/products";

export const getAllProduct = async ({
  page,
  size,
  query,
}: IGetAllProductsRequest) => {
  const res = await request<IPaginatedResponse<IProduct>>({
    url: `${prefix}`,
    method: "GET",
    params: { page, size, query },
  });
  return res;
};

export const getProductById = async ({ productId }: IGetProductById) => {
  const res = await request<IProduct>({
    url: `${prefix}/${productId}`,
    method: "GET",
  });
  return res;
};
