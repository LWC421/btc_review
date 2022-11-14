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
 * @returns {[boolean, User | null, boolean]} [로그인여부, user정보, 로딩여부]
 */
const useAuth = (): [boolean, User | null, boolean] => {
  const accessToken = getToken();

  if (!accessToken) {
    //accessToken이 없을 경우 바로 반환
    return [false, null, false];
  }

  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);

  //기존 헤더의 token삭제 후 accessToken 교체
  delete customAxios.defaults.headers.common.Authorization;
  customAxios.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${accessToken}`;

  const { isLoading } = useQuery<MyInfoResponse>(
    "myInfo",
    async () => {
      const res = await customAxios.get<MyInfoResponse>("/users");

      return res.data;
    },
    {
      refetchOnWindowFocus: false,
      retry: 0,
      onSuccess: (data) => {
        setUser(data);
        setIsAuth(true);
      },
      onError: () => {
        //정보 가져오기 실패
        setIsAuth(false);
      },
    }
  );

  return [isAuth, user, isLoading];
};

export default useAuth;
