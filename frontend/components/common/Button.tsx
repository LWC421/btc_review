import React, { useState } from "react";
import * as ButtonSt from "./Button.style";
import { FaSpinner } from "react-icons/fa";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean;
  loading?: boolean;
  disabled?: boolean;
}

const Button = ({
  primary = false,
  loading,
  disabled = false,
  children,
  ...rest
}: Props) => {
  //primary로 지정되어있으며 disabled가 아닌 경우에는 priamry색으로 지정
  //그 외의 경우에는 secondary인걸로
  const isPrimary = primary && !disabled;

  return (
    <ButtonSt.Button
      primary={isPrimary}
      disabled={loading || disabled}
      {...rest}
    >
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
