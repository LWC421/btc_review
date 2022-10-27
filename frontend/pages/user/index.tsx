import * as UserSt from "pageStyles/user/index.style";
import { NextPage } from "next";
import { Box } from "components/common";
import { useRouter } from "next/router";
import Head from "next/head";

const User: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>마이페이지</title>
        <meta name="description" content="마이페이지입니다." />
      </Head>
      <UserSt.UserWrapper>
        <Box hover onClick={() => router.push("/user/login")}>
          <UserSt.Card>로그인 및 회원가입</UserSt.Card>
        </Box>
      </UserSt.UserWrapper>
    </>
  );
};

export default User;
