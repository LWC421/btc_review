import { useState } from "react";
import { useQuery } from "react-query";
import { User } from "types";
import customAxios from "utils/customAxios";
import { getToken } from "utils/token";

type MyInfoResponse = {
  email: string;
  nickname: string;
};

/**
 * 로그인이 된 경우인지 판별합니다
 * @returns {[boolean, User | null]} [로그인여부, user정보]
 */
const useAuth = async (): Promise<[boolean, User | null]> => {
  const accessToken = getToken();

  if (!accessToken) {
    //accessToken이 없을 경우 바로 반환
    return [false, null];
  }

  //기존 헤더의 token삭제 후 accessToken 교체
  delete customAxios.defaults.headers.common.Authorization;
  customAxios.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${accessToken}`;

  try {
    const res = await customAxios.get<MyInfoResponse>("/users");

    return [true, res.data];
  } catch (error) {
    return [false, null];
  }
};

export default useAuth;
