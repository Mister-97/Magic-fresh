import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <>
      <Foot>
        <Img src="/logo.png" />
        <Links>
          <div>
            <Link href="/faq">
              <div>Faqs</div>
            </Link>
            <Link href="/contact">
              <div>Contact Us</div>
            </Link>
            <Link href="/services">
              <div>Our Services</div>
            </Link>
          </div>
          <div>
            <Link href="/terms">
              <div>Terms of Use</div>
            </Link>
            <Link href="/privacy">
              <div>Privacy Policy</div>
            </Link>
            <Link href="/book-now">
              <div>Request Estimate</div>
            </Link>
          </div>
          <div>
            <Link href="/?process">
              <div>Our Process</div>
            </Link>
            <Link href="/">
              <div>About Us</div>
            </Link>
          </div>
        </Links>
      </Foot>
      <Copyright>Copyright © Magic Fresh. All Rights Reserved.</Copyright>
    </>
  );
};

export default Footer;

const Foot = styled.footer`
  display: flex;
  justify-content: space-around;
  padding: 7vh 2vw;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Links = styled.div`
  display: flex;
  justify-content: space-around;
  font-family: "Oswald";
  font-style: normal;
  font-weight: 400;
  line-height: 45px;
  flex: 0.6;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  color: #000000;
  div {
    list-style: none;
    cursor: pointer;
    div {
      text-align: center;
    }
    @media (max-width: 900px) {
      text-align: center;
    }
    a {
      text-decoration: none;
      color: #000000;
    }
  }
`;

const Img = styled.img`
  width: 10vw;

  @media (max-width: 900px) {
    height: 50px;
  }
`;

const Copyright = styled.div`
  background: #315976;
  line-height: 58px;

  color: #ffffff;
  text-align: center;
`;
