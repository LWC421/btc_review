import { useRouter } from "next/router";
import * as HeaderSt from "./Header.style";

const Header = () => {
  const router = useRouter();

  return (
    <HeaderSt.Header>
      <HeaderSt.Logo onClick={() => router.push("/")}>BTC</HeaderSt.Logo>
    </HeaderSt.Header>
  );
};

export default Header;
