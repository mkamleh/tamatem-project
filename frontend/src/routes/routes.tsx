import { createBrowserRouter } from "react-router-dom";
import AllProducts from "../pages/all-products/AllProducts";
import ProductDetails from "../pages/product-details/ProductDetails";
import ErrorBoundaryFallback from "../pages/error-boundary-fallback/ErrorBoundaryFallback";
import Login from "../pages/login/Login";
import OrderDetails from "../pages/order-details/OrderDetails";
import ItemNotFound from "@/components/ui/item-not-found/ItemNotFound";

const routes = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorBoundaryFallback />,
  },
  {
    path: "/products",
    element: <AllProducts />,
    errorElement: <ErrorBoundaryFallback />,
  },
  {
    path: "/products/:id",
    element: <ProductDetails />,
    errorElement: <ErrorBoundaryFallback />,
  },
  {
    path: "/order-details/:id",
    element: <OrderDetails />,
    errorElement: <ErrorBoundaryFallback />,
  },
  {
    path: "*",
    element: <ItemNotFound item="page" />,
  },
]);

export default routes;
