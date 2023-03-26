import React from "react";
import styled from "styled-components";

const Canceled = () => {
  return (
    <Container>
      <h1>OOPS! 🚫</h1>
      <h3>We were unable to process your transaction. Please try again</h3>
      <a href="/discounts">Try Again</a>
    </Container>
  );
};

export default Canceled;

const Container = styled.div`
  height: 50vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
