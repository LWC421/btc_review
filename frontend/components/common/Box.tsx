import React from "react";
import * as BoxStyle from "./Box.style";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  type?: "section" | "article" | "div";
  hover?: boolean;
  padding?: string;
  onClick?: () => {};
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
    return <BoxStyle.Section {...options}>{children}</BoxStyle.Section>;
  } else if (type === "article") {
    return <BoxStyle.Article {...options}>{children}</BoxStyle.Article>;
  } else {
    return <BoxStyle.Div {...options}>{children}</BoxStyle.Div>;
  }
};

export default Box;
