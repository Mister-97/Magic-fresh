import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import Request from "../components/Button/Request";
import Features from "../components/Features/Features";
import Flag from "../components/Flag";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Magic Fresh</title>
        <meta name="description" content="Cleaning Service" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Navbar /> */}
      <Banner>
        <img src="/homepage/banner.jpeg" />
        <Request title="Request Cleaning Service" />
      </Banner>
      <Features />
      <Flag />
      {/* <Footer /> */}
    </div>
  );
}

const Banner = styled.div`
  img {
    width: 100vw;
  }
  position: relative;
  button {
    position: absolute;
    left: 45%;
    bottom: 10%;
    cursor: pointer;

    @media (max-width: 900px) {
      left: 37%;
    }
  }
`;
