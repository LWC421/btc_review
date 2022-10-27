import axios, { AxiosInstance } from "axios";

const customAxios: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND,
  timeout: 1000 * 10,
  headers: {
    "Content-Type": "application/json",
  },
});

export default customAxios;
