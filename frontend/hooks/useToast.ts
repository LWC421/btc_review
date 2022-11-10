import { AxiosError } from "axios";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import toastItemState, { ToastItem } from "recoils/toast";

type Props = {
  type: "success" | "warning" | "error";
  message: string;
  time?: number;
};

//현재는 단순 alert처리만
const useToast = () => {
  const setToastItems = useSetRecoilState(toastItemState);

  const DeleteToast = (id: number) => {
    setToastItems((prev) => prev.filter((item) => item.id !== id));
  };

  const pushToast = ({ type, message, time = 3000 }: Props) => {
    const randomId = new Date().getTime();

    const toastItem: ToastItem = {
      id: randomId,
      message,
      type,
      timerId: setTimeout(DeleteToast, time, randomId),
    };

    setToastItems((prev) => [...prev, toastItem]);
  };

  return pushToast;
};

export default useToast;
