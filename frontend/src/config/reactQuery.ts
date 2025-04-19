import { QueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: (failureCount, error) => {
        const axiosError = error as AxiosError;

        if (
          axiosError?.response?.status &&
          axiosError.response.status >= 400 &&
          axiosError.response.status < 500
        ) {
          return failureCount < 1; // Retry once on 401
        }

        return failureCount < 3; // Optional: retry other errors up to 3 times
      },
    },
  },
});

export default queryClient;
