import React from "react";
import * as InputSt from "./Input.style";

export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label?: string;
  warning?: boolean;
  warningMessage?: string;
}

const Input = ({
  id,
  label,
  children,
  warning,
  warningMessage,
  ...rest
}: Props) => {
  return (
    <div>
      {label && <InputSt.Label htmlFor={id}>{label}</InputSt.Label>}
      <InputSt.Input id={id} {...rest}>
        {children}
      </InputSt.Input>
      {warning && (
        <InputSt.Warning>
          {warningMessage ? warningMessage : "warningMessage를 작성해주세요"}
        </InputSt.Warning>
      )}
    </div>
  );
};

export default Input;
