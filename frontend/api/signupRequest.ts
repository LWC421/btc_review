import { AxiosError } from "axios";
import { useToast } from "hooks";
import { UseMutateFunction, useMutation } from "react-query";
import customAxios from "utils/customAxios";
import getError from "./getError";

type SignupProps = {
  email: string;
  password: string;
  nickname: string;
};

type ReturnType = {
  mutate: UseMutateFunction<
    void,
    AxiosError<unknown, any> | Error,
    void,
    unknown
  >;
  isLoading: boolean;
};

/**
 * 회원가입 Request를 위한 mutate, isLoading생성
 * @param {SignupProps} 회원가입 데이터
 * @returns {ReturnType} mutate와 isLoading
 */
const signupRequest = ({
  email,
  password,
  nickname,
}: SignupProps): ReturnType => {
  const pushToast = useToast();

  let timerId;

  const request = async () => {
    await customAxios.post<void>("/users", {
      email,
      password,
      nickname,
    });
  };

  const { mutate, isLoading } = useMutation<void, AxiosError | Error>(request, {
    onSuccess: () => {
      timerId = setTimeout(() => {
        window.location.href = "/";
      }, 1000);

      pushToast({
        type: "success",
        message: "회원가입 성공",
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
  });

  return { mutate, isLoading };
};

export default signupRequest;
