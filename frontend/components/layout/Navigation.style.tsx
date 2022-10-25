import styled from "styled-components";

export const Wrapper = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 45px;

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;

  background-color: gray;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
`;
