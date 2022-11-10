import axios from "axios";

type Props = {
  type: "success" | "warning" | "error";
  message: unknown;
};

//현재는 단순 alert처리만
const useAlert = ({ type, message }: Props) => {
  if (axios.isAxiosError(message)) {
    message = message.message;
  }

  if (type === "success") {
    alert(message);
  }
  if (type === "warning") {
    alert(message);
  }
  if (type === "error") {
    alert(message);
  }
};

export default useAlert;
