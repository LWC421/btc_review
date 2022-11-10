import { MouseEvent } from "react";
import { useRecoilState } from "recoil";
import toastItemState, { ToastItem as ToastItemType } from "recoils/toast";
import * as ToastSt from "./Toast.style";

type Props = {
  children: any;
};

const Toast = ({ children }: Props) => {
  const [toastItems, setToastItems] = useRecoilState(toastItemState);

  const DeleteToast = (e: MouseEvent, id: number) => {
    e.stopPropagation();
    const deleted = toastItems.filter((item) => item.id !== id);

    setToastItems(deleted);
  };

  return (
    <>
      <ToastSt.Wrapper>
        {toastItems.map((item) => {
          return <ToastItem value={item} onClose={DeleteToast} key={item.id} />;
        })}
      </ToastSt.Wrapper>
      {children}
    </>
  );
};

type ItemProps = {
  value: ToastItemType;
  onClose: (e: MouseEvent, id: number) => void;
};

const ToastItem = ({ value, onClose }: ItemProps) => {
  const item = () => {
    return (
      <>
        <ToastSt.Left>{value.message}</ToastSt.Left>
        <ToastSt.Right>
          <ToastSt.Close onClick={(e) => onClose(e, value.id)} />
        </ToastSt.Right>
      </>
    );
  };

  return (
    <>
      {value.type === "success" && <ToastSt.Success>{item()}</ToastSt.Success>}
      {value.type === "warning" && <ToastSt.Warning>{item()}</ToastSt.Warning>}
      {value.type === "error" && <ToastSt.Error>{item()}</ToastSt.Error>}
    </>
  );
};

export default Toast;
