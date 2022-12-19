import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { listenForOutsideClicks } from "../utils/listenForOutsideClicks";
import Request from "./Button/Request";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const menuRef = useRef(null);
  const [listening, setListening] = useState(false);

  useEffect(listenForOutsideClicks(listening, setListening, menuRef, setOpen));
  return (
    <Nav>
      <Img onClick={() => router.push("/")} src="/logo.png" />
      <Flex>
        <Link href="/book-now">Home</Link>
        <Link href="/services">Book Now</Link>
        <div>Our Services</div>
        <div>About Us</div>
        <div href="/cleaning-process">Discounts</div>
      </Flex>
      <Btns>
        <Request title="Request An Estimate" />
        <Menu
          ref={menuRef}
          onClick={() => setOpen(!open)}
          src="/homepage/menu.png"
        />
      </Btns>
      <MobileMenu open={open}>
        <div>
          <Link href="/book-now">Home</Link>
        </div>
        <div>
          <Link href="/services">Book Now</Link>
        </div>
        <div>Our Services</div>
        <div>About Us</div>
        <div href="/cleaning-process">Discounts</div>
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
  width: 12vw;
  @media (max-width: 900px) {
    width: 80px;
  }
`;

const Flex = styled.div`
  display: flex;
  flex: 0.7;
  justify-content: space-around;
  color: black;
  font-size: 14px;

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
  margin-left: -3vw;
  display: ${(props) => (props.open ? "block" : "none")};
  div {
    margin-bottom: 5px;
    margin-left: 10px;
  }
`;
