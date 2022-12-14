import myInfoRequest, { MyInfoResponse } from "api/myInfoRequest";
import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";
import { User } from "types";

/**
 * 로그인이 된 경우인지 판별합니다
 * @returns {[boolean, User, boolean]} [로그인여부, user정보, 로딩여부]
 */
const useAuth = (): [boolean, User, boolean] => {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [user, setUser] = useState<User>({ email: "", nickname: "" });

  const { isLoading } = useQuery("myInfo", myInfoRequest, {
    refetchOnWindowFocus: false,
    retry: 0,
    onSuccess: (data: MyInfoResponse) => {
      setUser(data);
      setIsAuth(true);
    },
    onError: (error) => {
      //정보 가져오기 실패
      if (axios.isAxiosError(error)) {
        return;
      } else {
        return;
      }
    },
  });

  return [isAuth, user, isLoading];
};

export default useAuth;
