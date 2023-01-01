import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import { Btn } from "../contact";

const Discounts = () => {
  const router = useRouter();
  return (
    <div style={{ background: "#EEF6FF" }}>
      <H2>Sign Up for out newsletter to stay updated with Discounts</H2>
      <Container>
        <img src="/booking/mail.png" />
        <Flex>
          <h3>Enter info below</h3>
          <Input type="text" placeholder="Full Name" />
          <Input type="text" placeholder="Email Address" />
          <div>
            <Btn>Submit</Btn>
          </div>
          <br />
          <div>
            <Btn onClick={() => router.push("/book-now")}>Book Now</Btn>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Discounts;

const H2 = styled.h2`
  text-align: center;
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
  margin: 20px 20px 20px 0;
  width: 200px;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    width: fit-content;
  }
`;
