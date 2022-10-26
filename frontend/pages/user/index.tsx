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
      </Head>
      <UserSt.UserWrapper>
        <Box hover onClick={() => router.push("/user/login")}>
          Test
        </Box>
      </UserSt.UserWrapper>
    </>
  );
};

export default User;
