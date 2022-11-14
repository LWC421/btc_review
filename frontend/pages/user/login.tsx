import * as LoginSt from "pageStyles/user/login.style";
import { NextPage } from "next";
import { Button, Input } from "components/common";
import { useToast, useInput, useServerSideAuth } from "hooks";
import Head from "next/head";
import { loginRequest } from "api";
import { FormEvent, useEffect } from "react";
import { useRouter } from "next/router";
import { MyContext } from "types";

const Login: NextPage = () => {
  const router = useRouter();
  const [email, onChangeEmail, _, isValidEmail] = useInput<string>(
    "",
    null,
    false,
    (email) => {
      const regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
      if (!regex.test(email)) {
        return false;
      } else {
        return true;
      }
    }
  );
  const [password, onChangePassword, __, isValidPassword] = useInput<string>(
    "",
    null,
    false,
    (password) => {
      if (password.length < 8) {
        return false;
      } else {
        return true;
      }
    }
  );

  let timerId: ReturnType<typeof setTimeout> | null = null;
  const { mutate, isLoading } = loginRequest({ email, password });

  useEffect(() => {
    if (timerId !== null) {
      clearTimeout(timerId);
    }
  }, []);

  const onClickLogin = (e: FormEvent) => {
    e.preventDefault();
    mutate();
  };

  const disabled = !(isValidEmail && isValidPassword);

  return (
    <>
      <Head>
        <title>로그인</title>
        <meta name="description" content="로그인 페이지입니다." />
      </Head>
      <LoginSt.Wrapper>
        <LoginSt.Form onSubmit={(e: FormEvent) => onClickLogin(e)}>
          <Input
            id="email"
            label="이메일"
            placeholder="test@gmail.com"
            type="email"
            required={true}
            maxLength={20}
            value={email}
            onChange={onChangeEmail}
            autoFocus={true}
            autoComplete="user-email"
          />
          <Input
            id="password"
            label="패스워드"
            placeholder="패스워드"
            type="password"
            required={true}
            maxLength={20}
            value={password}
            onChange={onChangePassword}
            autoComplete="current-password"
          />
          <Button primary type="submit" loading={isLoading} disabled={disabled}>
            로그인
          </Button>
          <Button type="button" onClick={() => router.push("/user/signup")}>
            회원가입
          </Button>
        </LoginSt.Form>
      </LoginSt.Wrapper>
    </>
  );
};

export async function getServerSideProps(context: MyContext) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isAuth] = await useServerSideAuth(context);

  if (isAuth) {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
    };
  } else {
    return { props: {} };
  }
}

export default Login;
