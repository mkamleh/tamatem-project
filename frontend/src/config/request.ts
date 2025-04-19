import axios, { AxiosError, ResponseType } from "axios";
import _ from "lodash";
import camelcaseKeys from "camelcase-keys";
import { clearAllCookies } from "@/utils/utils";
import snakecaseKeys from "snakecase-keys";
import { toaster } from "@/components/ui/toaster/toaster";

axios.defaults.withCredentials = true;

axios.interceptors.request.use(
  function (config) {
    config.headers["Content-Type"] = "application/json";
    config.headers["Accept"] = "application/json";
    if (config.data && typeof config.data === "object") {
      config.data = snakecaseKeys(config.data, { deep: true });
    }
    return config;
  },

  function (error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (response) {
    if (response.status === 200 || response.status === 201)
      return camelcaseKeys(response.data, { deep: true });
  },
  function (error) {
    const axiosError = error as AxiosError;

    if (axiosError?.response?.status === 500) {
      toaster.create({
        description: "Something went wrong.",
        type: "error",
        duration: 3000,
      });
    }

    // handle all 401 except for login
    if (
      axiosError?.response?.status === 401 &&
      !axiosError?.response?.config?.url?.includes("login")
    ) {
      clearAllCookies();
      toaster.create({
        description: "Session Expired",
        type: "error",
        duration: 2000,
        onStatusChange({ status }) {
          if (status === "unmounted") {
            window.location.href = "/login";
          }
        },
      });
    }

    // handle 401 for login
    if (
      axiosError?.response?.status === 401 &&
      axiosError?.response?.config?.url?.includes("login")
    ) {
      clearAllCookies();
      toaster.create({
        description: "Wrong username and password",
        type: "error",
        duration: 2000,
      });
    }

    return Promise.reject(error);
  }
);

const request = async <T>({
  url,
  signal,
  method = "GET",
  params,
  body,
  responseType,
}: {
  url: string;
  method?: "GET" | "POST" | "PUT" | "DELETE";
  params?: any;
  body?: any;
  responseType?: ResponseType;
  signal?: AbortSignal;
}) => {
  const BASE_URL = import.meta.env.VITE_BACKEND_URL;

  const res = await axios.request({
    url: BASE_URL + url,
    method,
    params,
    data: body,
    signal,
    responseType,
    withCredentials: true,
  });

  return res as T;
};

export default request;
