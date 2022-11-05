import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;

type ItemWrapperProps = {
  width: number;
};

export const ItemWrapper = styled.ul<ItemWrapperProps>`
  width: ${(props) => props.width}px;
  height: 10rem;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 0;
  margin: 0;

  position: absolute;
`;

export const Item = styled.li`
  width: 100%;
  height: 2.5rem;

  display: flex;
  align-items: center;

  padding-left: 0.2rem;
  background-color: ${(props) => props.theme.color.normal};

  font-size: 1.25rem;
  :hover {
    background-color: ${(props) => props.theme.color.primary};
  }
`;
