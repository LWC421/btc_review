import React from "react";
import * as BoxSt from "./Box.style";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  type?: "section" | "article" | "div";
  hover?: boolean;
  padding?: string;
  onClick?: () => void;
}

const Box = ({
  type = "div",
  hover = false,
  padding = "5px",
  children,
  ...rest
}: Props) => {
  const options = {
    hover,
    padding,
    ...rest,
  };

  if (type === "section") {
    return <BoxSt.Section {...options}>{children}</BoxSt.Section>;
  } else if (type === "article") {
    return <BoxSt.Article {...options}>{children}</BoxSt.Article>;
  } else {
    return <BoxSt.Div {...options}>{children}</BoxSt.Div>;
  }
};

export default Box;
