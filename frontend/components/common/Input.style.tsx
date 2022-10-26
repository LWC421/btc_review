import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  border: solid 1px ${(props) => props.theme.color.primary};
  border-radius: 5px;
  height: 2rem;
`;

export const Label = styled.label`
  font-size: 0.75rem;
`;
