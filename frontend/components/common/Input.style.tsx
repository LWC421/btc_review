import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  border: solid 1px ${(props) => props.theme.color.primary};
  border-radius: 5px;
  font-size: 1.25rem;
  height: 3rem;
`;

export const Label = styled.label`
  font-size: 0.75rem;
`;

export const Warning = styled.div`
  width: 100%;
  font-size: 0.75rem;
  color: ${(props) => props.theme.color.primary};
`;
