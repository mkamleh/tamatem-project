import request from "@/config/request";
import { ILoginBody } from "./interface";

const prefix = "/auth/";
export const login = async ({ username, password }: ILoginBody) => {
  const res = await request({
    url: `${prefix}login/`,
    method: "POST",
    body: { username, password },
  });
  return res;
};
