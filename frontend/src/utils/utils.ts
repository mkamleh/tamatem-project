import Cookies from "js-cookie";

export const clearAllCookies = () => {
  const allCookies = Cookies.get();

  Object.keys(allCookies).forEach((cookieName) => {
    Cookies.remove(cookieName);
  });
};

export const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
