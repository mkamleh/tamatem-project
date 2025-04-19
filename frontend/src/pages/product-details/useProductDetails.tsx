import { apiServices } from "@/apis";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useParams, useNavigate } from "react-router-dom";

const useProductDetails = () => {
  const { id } = useParams();
  const productId = Number(id);

  const { data: product, isLoading } = useQuery({
    queryKey: ["productId", productId],
    queryFn: () => apiServices.products.getProductById({ productId }),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: apiServices.orders.createOrder,
  });

  const navigate = useNavigate();

  const handleOnBuyClick = () => {
    mutate(
      { productId },
      {
        onSuccess: (data) => {
          navigate(`/order-details/${data.id}`);
        },
      }
    );
  };

  return { isPending, product, isLoading, handleOnBuyClick };
};

export default useProductDetails;
