import React, { ChangeEvent, FormEvent, FormEventHandler } from "react";
import * as TextAreaSt from "./TextArea.style";

interface Props extends React.HTMLAttributes<HTMLTextAreaElement> {
  id: string;
  label: string;
  value: string | number;
  maxlength: number;
  onChange: FormEventHandler<HTMLTextAreaElement>;
  rows: number;

  warning?: boolean;
  warningMessage?: string;
}

const TextArea = ({
  id,
  label,
  maxlength,
  onChange,
  rows,
  warning,
  warningMessage,
  ...rest
}: Props) => {
  return (
    <div>
      {label && <TextAreaSt.Label htmlFor={id}>{label}</TextAreaSt.Label>}
      <TextAreaSt.TextArea
        id={id}
        maxLength={maxlength}
        onChange={onChange}
        height={rows}
        rows={rows}
        {...rest}
      />
      {warning && (
        <TextAreaSt.Warning>
          {warningMessage ? warningMessage : "warningMessage를 작성해주세요"}
        </TextAreaSt.Warning>
      )}
    </div>
  );
};

export default TextArea;
