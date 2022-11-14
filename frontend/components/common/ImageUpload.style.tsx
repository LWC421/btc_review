import styled from "styled-components";

export const PreviewWrapper = styled.figure`
  width: 100%;
  height: 15rem;
  background-color: ${(props) => props.theme.color.normal};

  padding: 0;
  margin: 0;

  & > span {
    position: unset !important;

    & .preview {
      object-fit: contain !important;
      position: relative !important;
      width: 100% !important;
      height: 15rem !important;
    }
  }
`;
