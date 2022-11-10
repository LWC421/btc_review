import styled, { keyframes } from "styled-components";

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

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  :hover {
    cursor: pointer;
    background-color: black;
    color: white;
    border: 2px solid black;
  }

  transition-property: background-color, color;
  transition-duration: 0.5s;
  transition-timing-function: ease-out-cubic;
`;

interface SpinnerTypes {
  animation: ReturnType<typeof keyframes>;
}
export const Loading = styled.div<SpinnerTypes>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.5rem;
  animation: ${(props) => props.animation} 1s cubic-bezier(0.2, 0.6, 0.5, 0.1)
    infinite;
`;

export const spin = keyframes`
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
`;
