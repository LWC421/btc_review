import axios from "axios";

const getError = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    return error.response?.data.message ?? "에러 발생";
  } else if (error instanceof Error) {
    return error.message;
  } else {
    return "에러";
  }
};

export default getError;
