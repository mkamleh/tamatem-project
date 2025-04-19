import { apiServices } from "@/apis";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const useOrderDetails = () => {
  const { id } = useParams();
  const orderId = Number(id);

  const {
    data: order,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["order", orderId],
    queryFn: () => apiServices.orders.getOrderById({ orderId }),
  });
  return {
    order,
    isLoading,
    error,
  };
};

export default useOrderDetails;
