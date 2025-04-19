export interface ICreateOrder {
  productId: number;
}

export interface IGetOrderById {
  orderId: number;
}

export interface IOrder {
  id: number;
  product: string;
  createdAt: string;
  price: number;
}
