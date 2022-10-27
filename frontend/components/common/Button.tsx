import React from "react";
import * as ButtonSt from "./Button.style";
import { FaSpinner } from "react-icons/fa";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean;
  loading?: boolean;
}

const Button = ({ primary = false, loading, children, ...rest }: Props) => {
  return (
    <ButtonSt.Button primary={primary} disabled={loading} {...rest}>
      {loading && (
        <ButtonSt.Loading animation={ButtonSt.spin}>
          <FaSpinner fontSize="inherit" />
        </ButtonSt.Loading>
      )}
      {children}
    </ButtonSt.Button>
  );
};

export default Button;
