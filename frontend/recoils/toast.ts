import React from "react";
import { atom } from "recoil";

export type ToastItem = {
  id: number;
  message: React.ReactNode;
  type: "success" | "warning" | "error";
  timerId: ReturnType<typeof setTimeout>;
};

// const mock: Array<ToastItem> = [
//   {
//     id: 1,
//     message: "1번",
//     type: "success",
//     timerId: 1,
//   },
//   {
//     id: 2,
//     message: "2번",
//     type: "warning",
//     timerId: 1,
//   },
//   {
//     id: 3,
//     message: "3번",
//     type: "error",
//     timerId: 1,
//   },
// ];

const toastItemState = atom<Array<ToastItem>>({
  key: "toastItemState",
  default: [],
});

export default toastItemState;
