import styled from "styled-components";

type Props = {
  primary: boolean;
};

export const Button = styled.button<Props>`
  background-color: ${(props) =>
    props.primary ? props.theme.color.primary : props.theme.color.secondary};
  width: 100%;
  height: 3rem;

  border: 2px solid white;
  border-radius: 0.5rem;

  font-size: 1rem;
  font-weight: bold;

  :hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.color.normal};
    border: 2px solid black;
    transition-property: background-color, color;
    transition-duration: 0.3s;
    transition-timing-function: ease-out-cubic;
  }
`;
