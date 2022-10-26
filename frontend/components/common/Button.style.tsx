import styled from "styled-components";

type Props = {
  primary: boolean;
};

export const Button = styled.button<Props>`
  background-color: ${(props) =>
    props.primary ? props.theme.color.primary : props.theme.color.secondary};
`;
