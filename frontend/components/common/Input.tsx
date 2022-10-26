import React, { InputHTMLAttributes } from "react";
import * as InputSt from "./Input.style";

interface Props extends React.HTMLAttributes<HTMLInputElement> {
  id: string;
  label?: string;
}

const Input = ({ id, label, children, ...rest }: Props) => {
  return (
    <>
      {label && <InputSt.Label htmlFor={id}>{label}</InputSt.Label>}
      <InputSt.Input id={id} {...rest}>
        {children}
      </InputSt.Input>
    </>
  );
};

export default Input;
