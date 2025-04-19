import request from "@/config/request";
import { ICreateOrder, IGetOrderById, IOrder } from "./interface";

const prefix = "/orders";

export const createOrder = async ({ productId }: ICreateOrder) => {
  const res = await request<IOrder>({
    url: `${prefix}/`,
    method: "POST",
    body: { productId },
  });

  return res;
};

export const getOrderById = async ({ orderId }: IGetOrderById) => {
  const res = await request<IOrder>({
    url: `${prefix}/${orderId}`,
    method: "GET",
  });
  return res;
};
