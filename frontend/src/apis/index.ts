import * as authApis from "./auth/auth.apis";
import * as productsApis from "./products/products.apis";
import * as ordersApis from "./orders/orders.apis";

export const apiServices = {
  auth: authApis,
  products: productsApis,
  orders: ordersApis,
};
