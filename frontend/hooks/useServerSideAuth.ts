import cookies from "next-cookies";
import { MyContext, User } from "types";
import customAxios from "utils/customAxios";

const useServerSideAuth = async (
  context: MyContext
): Promise<[boolean, User]> => {
  const user: User = { email: "", nickname: "" };

  const allCookies = cookies(context);

  //accessToken이 없다는 뜻은 로그인 한 적이 없다는 뜻
  const accessToken = allCookies?.accessToken;
  if (!accessToken) {
    return [false, user];
  }

  //기존 요청의 Authorization은 지우고 다시 넣기
  delete customAxios.defaults.headers["Authorization"];
  customAxios.defaults.headers.Authorization = `Bearer ${accessToken}`;

  try {
    const res = await customAxios.get<User>("/users");
    const { email, nickname } = res.data;
    user.email = email;
    user.nickname = nickname;
    return [true, user];
  } catch (error) {
    //401Error이므로 false로 반환하기
    return [false, user];
  }
};

export default useServerSideAuth;
