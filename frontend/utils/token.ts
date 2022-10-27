import cookie from "react-cookies";
import customAxios from "./customAxios";

const HTTP_ONLY = process.env.NODE_ENV === "development" ? false : true;

/**
 * axios header와 cookie에 token을 저장
 * @param {string} accessToken Login후 받은 Access Token
 */
export const setToken = (accessToken: string) => {
  const accessExpires = new Date(Date.now() + 1000 * 60 * 60 * 24 * 365);

  cookie.save("accessToken", accessToken, {
    path: "/",
    expires: accessExpires,
    httpOnly: HTTP_ONLY,
  });
};

/**
 * cookie에서 accessToken을 가져와 반환합니다
 * @returns {string | undefined} 존재하지 않을 시 undefined
 */
export const getToken = (): string | undefined => {
  return cookie.load("accessToken");
};

/**
 * cookie에서 accessToken을 삭제
 */
export const deleteToken = () => {
  delete customAxios.defaults.headers["Authorization"];

  const accessExpires = new Date(Date.now() + 1);

  cookie.save("accessToken", "", {
    path: "/",
    expires: accessExpires,
    httpOnly: HTTP_ONLY,
  });
};
