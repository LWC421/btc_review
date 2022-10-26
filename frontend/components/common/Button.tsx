import React from "react";
import * as ButtonStyle from "./Button.style";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean;
}

const Button = ({ primary = false, children, ...rest }: Props) => {
  return (
    <ButtonStyle.Button primary={primary} {...rest}>
      {children}
    </ButtonStyle.Button>
  );
};

export default Button;
