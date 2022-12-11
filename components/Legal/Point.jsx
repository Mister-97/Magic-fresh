import React from "react";
import styled from "styled-components";

const Point = ({ title, children }) => {
  return (
    <Container>
      <h3>{title}</h3>
      {children}
    </Container>
  );
};

export default Point;

const Container = styled.div`
  /* font-family: "Questrial"; */
  font-style: normal;
  font-weight: 400;
  /* font-size: 64px; */
  /* line-height: 156.99%; */
  width: 80vw;
  margin-left: auto;
  margin-right: auto;

  /* or 100px */

  color: #656565;
`;
