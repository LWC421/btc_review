import axios, { AxiosError } from "axios";
import { useToast } from "hooks";
import { UseMutateFunction, useMutation } from "react-query";
import customAxios from "utils/customAxios";
import { setToken } from "utils/token";
import getError from "./getError";

type LoginData = {
  email: string;
  password: string;
};

type LoginResponse = {
  accessToken: string;
};

type ReturnType = {
  mutate: UseMutateFunction<
    LoginResponse,
    AxiosError<unknown, any> | Error,
    void,
    unknown
  >;
  isLoading: boolean;
};

/**
 * 로그인 Request를 위한 mutate, isLoading생성
 * @param {LoginData} 로그인데이터
 * @returns {ReturnType} mutate와 isLoading
 */
const loginRequest = ({ email, password }: LoginData): ReturnType => {
  let timerId;
  const pushToast = useToast();

  const request = async () => {
    const res = await customAxios.post("/users/login", { email, password });

    return res.data;
  };

  const { mutate, isLoading } = useMutation<LoginResponse, AxiosError | Error>(
    request,
    {
      onSuccess: (data) => {
        const { accessToken } = data;
        setToken(accessToken);

        timerId = setTimeout(() => {
          window.location.href = "/";
        }, 1000);

        pushToast({
          type: "success",
          message: "로그인 성공",
          time: 1000,
        });
      },
      onError: (error) => {
        const errorMessage = getError(error);
        pushToast({
          type: "error",
          message: errorMessage,
        });
      },
    }
  );

  return { mutate, isLoading };
};

export default loginRequest;
