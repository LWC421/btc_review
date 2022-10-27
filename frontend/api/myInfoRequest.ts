import axios, { AxiosError } from "axios";
import customAxios from "utils/customAxios";
import { getToken } from "utils/token";

export type MyInfoResponse = {
  email: string;
  nickname: string;
};

const myInfoRequest = async () => {
  const accessToken = getToken();

  //일단 header의 Authorization을 지운후
  //cookie에서 가져와서 Header에 붙인다
  delete customAxios.defaults.headers.common.Authorization;
  customAxios.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${accessToken}`;

  try {
    const res = await customAxios.get<MyInfoResponse>("/users");
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new AxiosError(error.response?.data.message);
    } else {
      throw new Error("무언가 잘못 되었습니다");
    }
  }
};

export default myInfoRequest;
