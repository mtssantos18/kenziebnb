import styled from "styled-components";

export const ButtonStyle = styled.button`
  background-color: ${(props) => (props.header ? "#E9ECEF" : "#0077B6")};

  color: ${(props) => (props.header ? "#495057" : "#FFFFFF")};

  width: ${(props) => (props.width ? `${props.width}px` : "250px")};
  height: ${(props) => (props.height ? `${props.height}px` : "45px")};

  border-radius: 50px;

  font-size: ${(props) => (props.fontSize ? `${props.fontSize}px` : "20px")};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "700")};

  transition: all 0.2s;

  :hover {
    background-color: ${(props) => (props.header ? "#495057" : "#023E8A")};
    color: ${(props) => props.header && "#FFFFFF"};
  }
`;
