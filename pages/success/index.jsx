import React from "react";
import styled from "styled-components";

const Success = () => {
  return (
    <Container>
      <h1>Transaction Successful! ✅</h1>
      <h3>
        You Raffle Registration Was Successful! We Will Keep You Notified!
      </h3>
    </Container>
  );
};

export default Success;

const Container = styled.div`
  height: 50vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
