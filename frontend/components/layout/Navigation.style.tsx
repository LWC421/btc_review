import styled from "styled-components";

export const Wrapper = styled.nav`
  position: fixed;
  bottom: 0;
  height: 45px;
  width: 600px;
  max-width: 100vw;

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;

  background-color: rgb(245, 245, 245);
  box-shadow: 0 -2px 2px 0px rgba(125, 125, 125, 0.4);
`;

export const Item = styled.div`
  display: flex;
  align-items: center;

  :hover {
    cursor: pointer;
  }
`;
