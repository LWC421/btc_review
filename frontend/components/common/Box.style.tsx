import styled from "styled-components";

type Props = {
  padding: string;
  hover: boolean;
};

const boxShadow = "0px 1px 4px rgba(0, 0, 0, 0.15)";

export const Section = styled.section<Props>`
  width: 100%;
  background-color: ${(props) => props.theme.color.normal};
  border-radius: 3px;
  box-shadow: ${boxShadow};
  padding: ${(props) => props.padding};
  :hover {
    cursor: ${(props) => (props.hover ? "pointer" : "default")};
  }
`;

export const Article = styled.section<Props>`
  width: 100%;
  background-color: ${(props) => props.theme.color.normal};
  border-radius: 3px;
  box-shadow: ${boxShadow};
  padding: ${(props) => props.padding};
  :hover {
    cursor: ${(props) => (props.hover ? "pointer" : "default")};
  }
`;

export const Div = styled.div<Props>`
  width: 100%;
  background-color: ${(props) => props.theme.color.normal};
  border-radius: 3px;
  box-shadow: ${boxShadow};
  padding: ${(props) => props.padding};
  :hover {
    cursor: ${(props) => (props.hover ? "pointer" : "default")};
  }
`;
