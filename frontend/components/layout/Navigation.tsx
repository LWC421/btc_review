import * as NavSt from "./Navigation.style";
import { BiHome, BiUserCircle, BiCommentAdd, BiSearch } from "react-icons/bi";
import { withRouter, NextRouter, useRouter } from "next/router";
import theme from "styles/theme";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  router: NextRouter;
}

const Navigation = ({ router }: Props) => {
  const route = useRouter();

  const iconSize = "35px";
  const currentPath = router.pathname.split("/")[1];
  const selectedColor = theme.color.primary;
  const deselectedColor = theme.color.secondary;

  //path에 따라 icon의 색깔을 지정
  const iconColor = (path: string) => {
    if (path === currentPath) {
      return selectedColor;
    } else {
      return deselectedColor;
    }
  };

  return (
    <>
      <NavSt.Wrapper>
        <NavSt.Item onClick={() => route.push("/")}>
          <BiHome fontSize={iconSize} color={iconColor("")} />
        </NavSt.Item>
        <NavSt.Item onClick={() => route.push("/cafe")}>
          <BiSearch fontSize={iconSize} color={iconColor("cafe")} />
        </NavSt.Item>
        <NavSt.Item onClick={() => route.push("/post")}>
          <BiCommentAdd fontSize={iconSize} color={iconColor("post")} />
        </NavSt.Item>
        <NavSt.Item onClick={() => route.push("/user")}>
          <BiUserCircle fontSize={iconSize} color={iconColor("user")} />
        </NavSt.Item>
      </NavSt.Wrapper>
    </>
  );
};

export default withRouter(Navigation);
