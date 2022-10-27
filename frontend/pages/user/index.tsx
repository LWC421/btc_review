import * as UserSt from "pageStyles/user/index.style";
import { NextPage } from "next";
import { Box } from "components/common";
import { useRouter } from "next/router";
import Head from "next/head";
import { useServerSideAuth } from "hooks";
import { MyContext, User } from "types";
import { deleteToken } from "utils/token";
import { BiUserCircle } from "react-icons/bi";
import theme from "styles/theme";

type Props = {
  isAuth: boolean;
  user: User;
};

const UserPage: NextPage<Props> = ({ isAuth, user }) => {
  const router = useRouter();

  const onClickLogout = () => {
    deleteToken();
    window.location.href = "/user";
  };

  return (
    <>
      <Head>
        <title>마이페이지</title>
        <meta name="description" content="마이페이지입니다." />
      </Head>
      <UserSt.UserWrapper>
        {isAuth && (
          <Box hover>
            <UserSt.Card>
              <BiUserCircle
                fontSize="2.5rem"
                color={theme.color.secondary}
                style={{ marginRight: "0.5rem" }}
              />
              {user.nickname}
            </UserSt.Card>
          </Box>
        )}
        {!isAuth && (
          <Box hover onClick={() => router.push("/user/login")}>
            <UserSt.Card>로그인 및 회원가입</UserSt.Card>
          </Box>
        )}

        {isAuth && (
          <Box hover onClick={onClickLogout}>
            <UserSt.Card>로그아웃</UserSt.Card>
          </Box>
        )}
      </UserSt.UserWrapper>
    </>
  );
};

export async function getServerSideProps(context: MyContext) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isAuth, user] = await useServerSideAuth(context);

  return { props: { isAuth, user } };
}

export default UserPage;
