import styled from "styled-components";
import { FaRegWindowClose } from "react-icons/fa";

export const Wrapper = styled.ul`
  position: fixed;
  left: 50%;
  bottom: 50px;
  z-index: 999;
  transform: translateX(-50%);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const ToastItem = styled.li`
  width: 20rem;
  height: 4rem;
  max-width: 100vw;
  padding: 0.25rem;
  padding-top: 0.1rem;
  padding-bottom: 0.1rem;

  overflow: hidden;

  border-radius: 0.25rem;
  border: 2px solid;

  display: flex;
  flex-direction: rows;
`;

export const Success = styled(ToastItem)`
  background-color: rgba(0, 153, 68, 0.1);
  border-color: rgba(0, 153, 68, 0.25);
`;

export const Warning = styled(ToastItem)`
  background-color: rgba(210, 84, 30, 0.1);
  border-color: rgba(210, 84, 30, 0.25);
`;

export const Error = styled(ToastItem)`
  background-color: rgba(207, 0, 15, 0.1);
  border-color: rgba(207, 0, 15, 0.25);
`;

export const Close = styled(FaRegWindowClose)`
  font-size: 1rem;
  color: gray;
  position: fixed;
  right: 0.25rem;

  &:hover {
    cursor: pointer;
    color: black;
  }

  transition-property: color;
  transition-duration: 0.5s;
  transition-function: ease-in-out;
`;

export const Left = styled.div`
  width: calc(100% - 1rem);
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Right = styled.div`
  width: 1rem;
  height: 100%;
`;
