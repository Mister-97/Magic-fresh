import React from "react";
import styled from "styled-components";
import ContactForm from "../../components/Discounts/Form";
import StripeCheckout from "../../components/Discounts/StripeCheckout";

const Discounts = () => {
  return (
    <div style={{ background: "#EEF6FF" }}>
      <Container>
        <Flex>
          <FlexCenter>
            {/* <h2 style={{ color: "red" }}>$5</h2> */}
            <H2>FREE Spring Cleaning Raffle</H2>
          </FlexCenter>
          <p style={{ color: "#636363", textAlign: "center" }}>
            Get a full house deep cleaning for $5 by entering into our seasonal
            <br />
            raffle. Multiple entries are eligible to increase chances of
            winning!
          </p>
          <p style={{ color: "#636363" }}>Raffle ends November 2nd 2023 </p>
          <h6>Information</h6>

          <ContactForm />
          {/* <StripeCheckout price={5} /> */}
        </Flex>
      </Container>
    </div>
  );
};

export default Discounts;

const H2 = styled.h2`
  text-align: center;
  color: black;
  ::first-word {
    color: red; /* set the color of the first letter to red */
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 768px) {
    flex-direction: column;
  }
  img {
    width: 30vw;
  }
`;

const Input = styled.input`
  padding: 10px;
  outline: none;
  margin: 10px 20px 10px 0;
  width: 500px;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5rem;
  div {
    width: fit-content;
  }
`;

const FlexCenter = styled.div`
  display: flex;
  justify-content: space-around;
`;
