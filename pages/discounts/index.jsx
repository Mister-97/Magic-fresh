import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import { Btn } from "../contact";
import { PaymentForm } from "react-square-web-payments-sdk";
import { CreditCard } from "react-square-web-payments-sdk";

const Discounts = () => {
  const router = useRouter();
  return (
    <div style={{ background: "#EEF6FF" }}>
      <Container>
        <Flex>
          <Heading>
            <H2 style={{ color: "red" }}>$5</H2>
            <H2> Full House Deep Cleaning Raffle</H2>
          </Heading>
          <p style={{ color: "#636363" }}>
            Get a full house deep cleaning for $5 by entering into our seasonal
            <br />
            raffle. Multiple entries are eligible to increase chances of
            winning!
          </p>
          <p style={{ color: "#636363" }}>Raffle ends April 25th 2022 </p>
          <h6>Information</h6>
          <Input type="text" placeholder="First and Last Name" />
          <Input type="number" placeholder="Phone number" />
          <Input type="email" placeholder="Email Address" />
          <h6 style={{ marginTop: "30px" }}>Payment methods</h6>
          <Input type="text" placeholder="First and Last Name" />
          <Input type="number" placeholder="Card number" />
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Input
              style={{ width: "240px" }}
              type="number"
              placeholder="Security Code"
            />
            <Input
              style={{ width: "240px" }}
              type="number"
              placeholder="Expiration date"
            />
          </div>
          <Input type="text" placeholder="Billing Address" />
          <div
            style={{
              display: "flex",
              gap: "4px",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            <input type="checkbox" id="checkbox" />
            <label for="checkbox" style={{ text: "8px" }}>
              By clicking box you agree to newsletter, discounts and raffle
              email marketing
            </label>
          </div>
          <div>
            <PaymentForm
              applicationId="sandbox-sq0idb-hyrkjanVdy28KV-U6aP5og"
              cardTokenizeResponseReceived={async (token, verifiedBuyer) => {
                const response = await fetch("/api/pay", {
                  method: "POST",
                  headers: {
                    "Content-type": "application/json",
                  },
                  body: JSON.stringify({
                    sourceId: token.token,
                  }),
                });
                console.log(await response.json());
              }}
              locationId="L264NTGKRKQV7"
            >
              <CreditCard
                buttonProps={{
                  css: {
                    backgroundColor: "#78a5ce",
                    fontSize: "18px",
                    color: "#fff",
                  },
                }}
              />
            </PaymentForm>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Discounts;
const Heading = styled.h2`
  display: flex;
  text-align: center;
  justify-content: center;
  gap: 4px;
`;
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
