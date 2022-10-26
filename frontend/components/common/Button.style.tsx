import styled from "styled-components";

type Props = {
  primary: boolean;
};

export const Button = styled.button<Props>`
  background-color: ${(props) =>
    props.primary ? props.theme.color.primary : props.theme.color.secondary};
  width: 100%;
  height: 35px;
  border 2px solid white;
  border-radius: 5px;
  :hover {
    cursor: pointer;
    background-color: ${(props) =>
      props.primary ? props.theme.color.secondary : props.theme.color.primary};
    color: white;
    transition-property: background-color, color;
    transition-duration: 0.3s;
    transition-timing-function : ease-out-cubic;

  }
`;
