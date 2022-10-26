import React from "react";
import * as BoxSt from "./Box.style";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  type?: "section" | "article" | "div" | "form";
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
    return <BoxSt.Section {...options}>{children}</BoxSt.Section>;
  } else if (type === "article") {
    return <BoxSt.Article {...options}>{children}</BoxSt.Article>;
  } else if (type === "div") {
    return <BoxSt.Div {...options}>{children}</BoxSt.Div>;
  } else {
    return <BoxSt.Form {...options}>{children}</BoxSt.Form>;
  }
};

export default Box;
