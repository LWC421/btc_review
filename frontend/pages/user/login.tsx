import * as LoginSt from "pageStyles/user/login.style";
import { NextPage } from "next";
import { Button, Input } from "components/common";
import { useInput } from "hooks";
import Head from "next/head";

const Login: NextPage = () => {
  const [email, onChangeEmail] = useInput<string>("");
  const [password, onChangePassword] = useInput<string>("");

  return (
    <>
      <Head>
        <title>로그인</title>
      </Head>
      <LoginSt.Wrapper>
        <LoginSt.Form>
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
          <Button primary>로그인</Button>
          <Button>회원가입</Button>
        </LoginSt.Form>
      </LoginSt.Wrapper>
    </>
  );
};

export default Login;
