import { signupRequest } from "api";
import { AxiosError } from "axios";
import { Button, Input } from "components/common";
import { useInput } from "hooks";
import { useAlert } from "hooks";
import { NextPage } from "next";
import { useRouter } from "next/router";
import * as SignupSt from "pageStyles/user/signup.style";
import { FormEvent, useEffect, useState } from "react";
import { useMutation } from "react-query";

const Signup: NextPage = () => {
  const router = useRouter();

  const [isValidEmail, setIsValidEmail] = useState<boolean>(true);
  const [isValidPassword, setIsValidPassword] = useState<boolean>(true);
  const [isValidPasswordCheck, setIsValidPasswordCheck] =
    useState<boolean>(true);
  const [isValidNickname, setIsValidNickname] = useState<boolean>(true);

  const [email, onChangeEmail] = useInput<string>("", (e) => {
    const regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
    if (!regex.test(e.target.value)) {
      setIsValidEmail(false);
    } else {
      setIsValidEmail(true);
    }

    return e.target.value;
  });

  const [password, onChangePassword] = useInput<string>("", (e) => {
    const numbRegex = new RegExp("[0-9]");
    const charRegex = new RegExp("[a-zA-Z]");
    if (
      numbRegex.test(e.target.value) &&
      charRegex.test(e.target.value) &&
      e.target.value.length >= 8
    ) {
      setIsValidPassword(true);
    } else {
      setIsValidPassword(false);
    }

    return e.target.value;
  });

  const [passwordCheck, onChangePasswordCheck] = useInput<string>("");

  const [nickname, onChangeNickname] = useInput<string>("", (e) => {
    if (e.target.value.length < 3) {
      setIsValidNickname(false);
    } else {
      setIsValidNickname(true);
    }

    return e.target.value;
  });

  useEffect(() => {
    if (password !== passwordCheck) {
      setIsValidPasswordCheck(false);
    } else {
      setIsValidPasswordCheck(true);
    }
  }, [password, passwordCheck]);

  const { mutate, isLoading } = useMutation<void, AxiosError | Error>(
    () => signupRequest({ email, password, nickname }),
    {
      onSuccess: () => {
        //회원가입 성공
        useAlert({ type: "alram", message: "회원가입을 축하합니다" });
        router.push("/user/login");
      },
      onError: (error) => {
        //회원가입 실패
        useAlert({ type: "error", message: error });
      },
    }
  );

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
      useAlert({ type: "error", message: "입력 정보를 확인해주세요" });
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

        <Button primary type="submit" loading={isLoading}>
          회원가입
        </Button>
      </SignupSt.Form>
    </SignupSt.Wrapper>
  );
};

export default Signup;
