import axios, { AxiosInstance } from "axios";

const customAxios: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND,
  timeout: 1000 * 10,
  headers: {
    "Content-Type": "application/json",
  },
});

export const mapAxios: AxiosInstance = axios.create({
  baseURL: "https://naveropenapi.apigw.ntruss.com/map-geocode/v2",
  headers: {
    "X-NCP-APIGW-API-KEY-ID": process.env.NEXT_PUBLIC_MAP_ID,
    "X-NCP-APIGW-API-KEY-KEY": process.env.NEXT_PUBLIC_MAP_SECRET,
  },
});

export const kakaoAxios: AxiosInstance = axios.create({
  baseURL: "https://dapi.kakao.com",
  headers: {
    Authorization: `KakaoAK ${process.env.NEXT_PUBLIC_KAKAO_KEY}`,
  },
});

export default customAxios;
