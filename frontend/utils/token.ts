import cookie from "react-cookies";
import axiosInstance from "utils/customAxios";

const HTTP_ONLY = process.env.NODE_ENV === "development" ? false : true;

/**
 * axios header와 cookie에 token을 저장
 * @param {string} accessToken Login후 받은 Access Token
 */
export const setToken = (accessToken: string) => {
  const accessExpires = new Date(Date.now() + 1000 * 60 * 60 * 24 * 365);

  axiosInstance.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${accessToken}`;

  cookie.save("accessToken", accessToken, {
    path: "/",
    expires: accessExpires,
    httpOnly: HTTP_ONLY,
  });
};