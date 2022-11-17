import axios from "axios";

const getError = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    if (error.response?.data.statusCode === 401) {
      //401에러일 경우 접근 권한이 없다는 뜻
      return "접근권한이 없습니다";
    }

    const message = error.response?.data.message;
    if (message instanceof Array) {
      //에러가 여러개일 경우 그 중 첫번째만
      return message[0];
    }
    if (message) {
      //문자열일 경우
      return message;
    }
    return "에러 발생";
  } else if (error instanceof Error) {
    return error.message;
  } else {
    return "에러 발생";
  }
};

export default getError;
