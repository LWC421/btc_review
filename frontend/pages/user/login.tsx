import * as LoginSt from "./login.style";
import { NextPage } from "next";
import { Box, Button, Input } from "components/common";
import { useInput } from "hooks";

const Login: NextPage = () => {
  const [email, onChangeEmail] = useInput<string>("");
  const [password, onChangePassword] = useInput<string>("");

  return (
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
  );
};

export default Login;
