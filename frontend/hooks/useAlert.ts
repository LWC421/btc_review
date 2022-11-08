import axios from "axios";

type Props = {
  type: "alram" | "error";
  message: unknown;
};

//현재는 단순 alert처리만
const useAlert = ({ type, message }: Props) => {
  if (axios.isAxiosError(message)) {
    message = message.message;
  }

  if (type === "alram") {
    alert(message);
  }

  if (type === "error") {
    alert(message);
  }
};

export default useAlert;
