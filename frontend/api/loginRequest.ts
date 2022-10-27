import axios, { AxiosError } from "axios";
import customAxios from "utils/customAxios";

type LoginData = {
  email: string;
  password: string;
};

export type LoginResponse = {
  accessToken: string;
};

const loginRequest = async ({ email, password }: LoginData) => {
  try {
    const res = await customAxios.post<LoginResponse>("/users/login", {
      email,
      password,
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

export default loginRequest;
