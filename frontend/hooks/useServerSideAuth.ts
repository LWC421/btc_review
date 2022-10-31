import cookies from "next-cookies";
import { MyContext, User } from "types";
import customAxios from "utils/customAxios";

/**
 * ServerSide(또는 Client 페이지 이동)에서 유저의 정보를 불러옵니다
 * @param {MyContext} context serverside의 context
 * @returns {[boolean, User | null]} [로그인 여부, 유저 정보]
 */
const useServerSideAuth = async (
  context: MyContext
): Promise<[boolean, User | null]> => {
  const user: User = { email: "", nickname: "" };

  const allCookies = cookies(context);

  //accessToken이 없다는 뜻은 로그인 한 적이 없다는 뜻
  const accessToken = allCookies?.accessToken;
  if (!accessToken) {
    return [false, null];
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
    return [false, null];
  }
};

export default useServerSideAuth;
