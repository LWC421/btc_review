import React from "react";
import * as ButtonSt from "./Button.style";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean;
}

const Button = ({ primary = false, children, ...rest }: Props) => {
  return (
    <ButtonSt.Button primary={primary} {...rest}>
      {children}
    </ButtonSt.Button>
  );
};

export default Button;
