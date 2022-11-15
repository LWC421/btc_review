import { AxiosError } from "axios";
import { useToast } from "hooks";
import { useMutation } from "react-query";
import customAxios from "utils/customAxios";
import getError from "./getError";

const postCafeRequest = (formData: FormData) => {
  const pushToast = useToast();

  const request = async () => {
    await customAxios.post<void>("/cafes", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  };

  const { mutate, isLoading, isSuccess } = useMutation<
    void,
    AxiosError | Error
  >(request, {
    onSuccess: () => {
      pushToast({
        type: "success",
        message: "카페 정보 기입 성공",
        time: 2000,
      });
    },
    onError: (error) => {
      const errorMessage = getError(error);
      pushToast({
        type: "error",
        message: errorMessage,
        time: 2000,
      });
    },
  });

  return { mutate, isLoading, isSuccess };
};

export default postCafeRequest;
