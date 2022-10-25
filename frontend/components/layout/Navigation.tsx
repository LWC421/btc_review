import * as Nav from "./Navigation.style";
import { BiHome, BiUserCircle, BiCommentAdd } from "react-icons/bi";

const Navigation = () => {
  const iconSize = "35px";

  return (
    <>
      <Nav.Wrapper>
        <Nav.Item>
          <BiHome fontSize={iconSize} />
        </Nav.Item>
        <Nav.Item>
          <BiCommentAdd fontSize={iconSize} />
        </Nav.Item>
        <Nav.Item>
          <BiUserCircle fontSize={iconSize} />
        </Nav.Item>
      </Nav.Wrapper>
    </>
  );
};

export default Navigation;
