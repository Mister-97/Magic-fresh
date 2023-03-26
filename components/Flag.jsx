import React from "react";
import styled from "styled-components";

const Flag = () => {
  return (
    <Container>Magic Fresh is Proud to Serve the Chicagoland Area</Container>
  );
};

export default Flag;
const Container = styled.div`
  background: #2fa5f9;

  font-family: "Oswald";
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 116px;

  color: #ffffff;
  text-align: center;
  padding: 20px 0;
  @media (max-width: 800px) {
    font-size: 17px;
    line-height: 50px;
  }
`;
