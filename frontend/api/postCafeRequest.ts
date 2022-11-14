import customAxios from "utils/customAxios";
import getError from "./getError";

const postCafeRequest = (formData: FormData) => {
  try {
    customAxios.post("/", formData);
  } catch (error) {
    throw new Error(getError(error));
  }
};

export default postCafeRequest;
