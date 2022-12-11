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
          <ul>
            <Link href="/faq">
              <li>Faqs</li>
            </Link>
            <Link href="/contact">
              <li>Contact Us</li>
            </Link>
            <li>Our Services</li>
          </ul>
          <ul>
            <Link href="/terms">
              <li>Terms of Use</li>
            </Link>
            <Link href="/privacy">
              <li>Privacy Policy</li>
            </Link>
            <li>Accessibility</li>
          </ul>
          <ul>
            <li>Request Estimate</li>
            <li>Our Process</li>
            <li>About Us</li>
          </ul>
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
  line-height: 38px;
  flex: 0.6;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  color: #000000;
  ul {
    list-style: none;
    cursor: pointer;
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
    margin-left: 30px;
  }
`;

const Copyright = styled.div`
  background: #315976;
  line-height: 58px;

  color: #ffffff;
  text-align: center;
`;
