import { apiServices } from "@/apis";
import { delay } from "@/utils/utils";
import { createListCollection } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const useAllProducts = () => {
  const itemsPerPage = 9;

  const countries = createListCollection({
    items: [
      { label: "JO", value: "JO" },
      { label: "SA", value: "SA" },
    ],
  });

  const [country, setCountry] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const navigate = useNavigate();
  const gridRef = useRef<HTMLDivElement | null>(null);

  const { data, isLoading } = useQuery({
    queryKey: ["products", page, itemsPerPage, country],
    queryFn: async () => {
      // add 1 second delay to make the pagination smoother
      await delay(1000);
      return apiServices.products.getAllProduct({
        page,
        size: itemsPerPage,
        query: country,
      });
    },
  });

  const changePage = (nextPage: boolean) => {
    return () => {
      if (gridRef.current) {
        gridRef.current.scrollTop = 0;
      }
      setPage((p) => (nextPage ? p + 1 : p - 1));
    };
  };

  const handleCountryOnChange = (country: string) => {
    setPage(1);
    setCountry(country);
  };

  const handleOnItemClick = (itemId: number) => {
    return () => {
      navigate(`/products/${itemId}`);
    };
  };

  const handleTotalPagesChange = () => {
    if (!data) return;
    setTotalPages(Math.ceil(data?.count / itemsPerPage));
  };

  useEffect(() => {
    handleTotalPagesChange();
  }, [data?.count]);

  return {
    country,
    setPage,
    navigate,
    isLoading,
    data: data?.results ?? [],
    page,
    totalPages,
    changePage,
    handleCountryOnChange,
    itemsPerPage,
    handleOnItemClick,
    countries,
    gridRef,
  };
};

export default useAllProducts;
