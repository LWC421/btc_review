import styled from "styled-components";

type Props = {
  height: number;
};

export const TextArea = styled.textarea<Props>`
  width: 100%;
  resize: none;
  border: solid 1px ${(props) => props.theme.color.primary};
  border-radius: 5px;
  font-size: 1rem;
  height: ${(props) => props.height * 1.2}rem;
`;

export const Label = styled.label`
  font-size: 0.75rem;
`;

export const Warning = styled.div`
  width: 100%;
  font-size: 0.75rem;
  color: ${(props) => props.theme.color.primary};
`;
