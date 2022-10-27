import * as LoginSt from "pageStyles/user/login.style";
import { NextPage } from "next";
import { Button, Input } from "components/common";
import { useInput } from "hooks";
import Head from "next/head";
import { useMutation } from "react-query";
import { loginRequest } from "api";
import { FormEvent } from "react";
import axios, { AxiosError } from "axios";
import { LoginResponse } from "api/loginRequest";
import { setToken } from "utils/token";
import { useRouter } from "next/router";

const Login: NextPage = () => {
  const router = useRouter();

  const [email, onChangeEmail] = useInput<string>("");
  const [password, onChangePassword] = useInput<string>("");

  const { mutate, isLoading } = useMutation<LoginResponse, AxiosError | Error>(
    () => loginRequest({ email, password }),
    {
      onSuccess: (data) => {
        //로그인 성공
        const { accessToken } = data;
        setToken(accessToken);
        router.replace("/");
      },
      onError: (error) => {
        //로그인 실패
        if (axios.isAxiosError(error)) {
          alert(error.message);
        } else {
          alert(error);
        }
      },
    }
  );

  const onClickLogin = (e: FormEvent) => {
    e.preventDefault();
    mutate();
  };

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
            label="email"
            placeholder="test@gmail.com"
            type="email"
            required={true}
            value={email}
            onChange={onChangeEmail}
          />
          <Input
            id="password"
            label="password"
            placeholder="password"
            type="password"
            required={true}
            value={password}
            onChange={onChangePassword}
          />
          <Button primary type="submit" loading={isLoading}>
            로그인
          </Button>
          <Button type="button">회원가입</Button>
        </LoginSt.Form>
      </LoginSt.Wrapper>
    </>
  );
};

export default Login;
