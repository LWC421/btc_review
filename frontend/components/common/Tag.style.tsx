import { FaRegWindowClose } from "react-icons/fa";
import styled from "styled-components";

export const Wrapper = styled.ul`
  width: 100%;
  min-height: 3rem;
  background-color: ${(props) => props.theme.color.normal};
  border: 2px solid ${(props) => props.theme.color.primary};
  border-radius: 0.5rem;
  padding: 0.5rem;
`;

export const TagItem = styled.li`
  display: inline-block;
  background-color: ${(props) => props.theme.color.primary};
  color: ${(props) => props.theme.color.normal};
  font-family: notoBold;
  padding: 0.25rem;
  border-radius: 0.25rem;
  margin-left: 0.3rem;
  margin-top: 0.3rem;
`;

export const Close = styled(FaRegWindowClose)`
  font-size: 1rem;
  color: ${(props) => props.theme.color.normal};
  margin-left: 0.25rem;

  &:hover {
    cursor: pointer;
    color: black;
  }

  transition-property: color;
  transition-duration: 0.5s;
  transition-function: ease-in-out;
`;
