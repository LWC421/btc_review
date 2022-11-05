import styled from "styled-components";

export const Header = styled.header`
  position: relative;
  top: 0;

  width: 600px;
  max-width: 100vw;
  height: 45px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgb(245, 245, 245);
`;

export const Logo = styled.h1`
  color: ${(props) => props.theme.color.primary};
  font-family: notoBold;
  font-weight: bold;

  :hover {
    cursor: pointer;
    color: ${(props) => props.theme.color.secondary};
  }
`;
