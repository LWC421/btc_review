import { signupRequest } from "api";
import { AxiosError } from "axios";
import { Button, Input } from "components/common";
import { useInput } from "hooks";
import { useToast } from "hooks";
import { NextPage } from "next";
import { useRouter } from "next/router";
import * as SignupSt from "pageStyles/user/signup.style";
import { FormEvent, useEffect, useState } from "react";
import { useMutation } from "react-query";

const Signup: NextPage = () => {
  const router = useRouter();
  const pushToast = useToast();

  const [isValidPasswordCheck, setIsValidPasswordCheck] =
    useState<boolean>(true);

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
      const numbRegex = new RegExp("[0-9]");
      const charRegex = new RegExp("[a-zA-Z]");
      if (
        numbRegex.test(password) &&
        charRegex.test(password) &&
        password.length >= 8
      ) {
        return true;
      } else {
        return false;
      }
    }
  );

  const [passwordCheck, onChangePasswordCheck] = useInput<string>("");

  const [nickname, onChangeNickname, ___, isValidNickname] = useInput<string>(
    "",
    null,
    false,
    (nickname) => {
      if (nickname.length < 3) {
        return false;
      } else {
        return true;
      }
    }
  );

  const disabled = !(
    isValidEmail &&
    isValidPassword &&
    isValidPasswordCheck &&
    isValidNickname
  );

  useEffect(() => {
    if (password !== passwordCheck) {
      setIsValidPasswordCheck(false);
    } else {
      setIsValidPasswordCheck(true);
    }
  }, [password, passwordCheck]);

  const { mutate, isLoading } = signupRequest({ email, password, nickname });

  const onClickSignup = (e: FormEvent) => {
    e.preventDefault();
    if (
      isValidEmail &&
      isValidPassword &&
      isValidPasswordCheck &&
      isValidNickname
    ) {
      mutate();
    } else {
      pushToast({ type: "warning", message: "입력 정보를 확인해주세요" });
    }
  };

  return (
    <SignupSt.Wrapper>
      <SignupSt.Form onSubmit={onClickSignup}>
        <Input
          id="email"
          type="email"
          placeholder="test@test.com"
          label="이메일"
          maxLength={20}
          required={true}
          value={email}
          onChange={onChangeEmail}
          warning={!isValidEmail}
          warningMessage="이메일 형식이 올바르지 않습니다"
        />

        <Input
          id="password"
          type="password"
          placeholder="패스워드"
          label="패스워드"
          maxLength={20}
          required={true}
          value={password}
          onChange={onChangePassword}
          warning={!isValidPassword}
          warningMessage="패스워드는 8글자 이상, 숫자와 문자를 포함해야합니다"
        />

        <Input
          id="passwordCheck"
          type="password"
          placeholder="패스워드 확인"
          label="패스워드 확인"
          maxLength={20}
          required={true}
          value={passwordCheck}
          onChange={onChangePasswordCheck}
          warning={!isValidPasswordCheck}
          warningMessage="패스워드가 일치하지 않습니다"
        />

        <Input
          id="nickname"
          placeholder="닉네임"
          label="닉네임"
          maxLength={10}
          required={true}
          value={nickname}
          onChange={onChangeNickname}
          warning={!isValidNickname}
          warningMessage="닉네임은 3글자 이상이여야합니다"
        />

        <Button primary type="submit" loading={isLoading} disabled={disabled}>
          회원가입
        </Button>
      </SignupSt.Form>
    </SignupSt.Wrapper>
  );
};

export default Signup;
