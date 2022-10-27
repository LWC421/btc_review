import styled from "styled-components";

type Props = {
  padding: string;
  hover: boolean;
};

export const Section = styled.section<Props>`
  width: 100%;
  background-color: ${(props) => props.theme.color.normal};
  border-radius: 3px;
  box-shadow: ${(props) => props.theme.shadow.secondary};
  padding: ${(props) => props.padding};
  :hover {
    cursor: ${(props) => (props.hover ? "pointer" : "default")};
    background-color: ${(props) =>
      props.hover ? props.theme.color.primary : props.theme.color.normal};
    transition-property: background-color;
    transition-duration: 0.3s;
    transition-timing-function: ease-out-cubic;
  }
`;

export const Article = styled.section<Props>`
  width: 100%;
  background-color: ${(props) => props.theme.color.normal};
  border-radius: 3px;
  box-shadow: ${(props) => props.theme.shadow.secondary};
  padding: ${(props) => props.padding};
  :hover {
    cursor: ${(props) => (props.hover ? "pointer" : "default")};
    background-color: ${(props) =>
      props.hover ? props.theme.color.primary : props.theme.color.normal};
    transition-property: background-color;
    transition-duration: 0.3s;
    transition-timing-function: ease-out-cubic;
  }
`;

export const Div = styled.div<Props>`
  width: 100%;
  background-color: ${(props) => props.theme.color.normal};
  border-radius: 3px;
  box-shadow: ${(props) => props.theme.shadow.secondary};
  padding: ${(props) => props.padding};
  :hover {
    cursor: ${(props) => (props.hover ? "pointer" : "default")};
    background-color: ${(props) =>
      props.hover ? props.theme.color.primary : props.theme.color.normal};
    transition-property: background-color;
    transition-duration: 0.3s;
    transition-timing-function: ease-out-cubic;
  }
`;
