import axios, { AxiosError } from "axios";
import customAxios from "utils/customAxios";

type SignupProps = {
  email: string;
  password: string;
  nickname: string;
};

const signupRequest = async ({ email, password, nickname }: SignupProps) => {
  try {
    const res = await customAxios.post<void>("/users", {
      email,
      password,
      nickname,
    });

    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new AxiosError(error.response?.data.message);
    } else {
      throw new Error("무언가 잘못 되었습니다");
    }
  }
};

export default signupRequest;
