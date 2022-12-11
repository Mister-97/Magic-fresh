import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import styled from "styled-components";
import Request from "./Button/Request";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  return (
    <Nav>
      <Img onClick={() => router.push("/")} src="/logo.png" />
      <Flex>
        <Link href="/book-now">Book Now</Link>
        <Link href="/services">Our Services</Link>
        <div>About Us</div>
        <div>Discounts</div>
        <div href="/cleaning-process">Our Cleaning Process</div>
      </Flex>
      <Btns>
        <Request title="Request An Estimate" />
        <Menu onClick={() => setOpen(!open)} src="/homepage/menu.png" />
      </Btns>
      <MobileMenu open={open}>
        <div>Book Now</div>
        <div>Our Services</div>
        <div>About Us</div>
        <div>Discounts</div>
        <div>Our Cleaning Process</div>
      </MobileMenu>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: white;
  cursor: pointer;
  padding: 0 10px;
  position: relative;

  a {
    text-decoration: none;
    color: #111;
  }

  @media (max-width: 900px) {
    justify-content: space-between;
  }
`;

const Img = styled.img`
  width: 10vw;
  @media (max-width: 900px) {
    width: 80px;
  }
`;

const Flex = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-around;
  color: black;

  @media (max-width: 900px) {
    display: none;
    justify-content: space-between;
  }
`;

const Btns = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Menu = styled.img`
  display: none;
  width: 30px;
  @media (max-width: 900px) {
    display: block;
  }
`;

const MobileMenu = styled.div`
  position: absolute;
  z-index: 100;
  top: 100%;
  background: white;
  opacity: 0.6;
  width: 100vw;
  display: ${(props) => (props.open ? "block" : "none")};
  div {
    margin-bottom: 5px;
  }
`;
