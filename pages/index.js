import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import styled from "styled-components";
import Request from "../components/Button/Request";
import Features from "../components/Features/Features";
import Flag from "../components/Flag";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import Clients from "../components/Clients";
import ImageCarousel from "../components/ImageCarousel";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  return (
    <div className={styles.container} style={{ width: "100%" }}>
      <Head>
        <meta property="og:title" content="Magic Fresh Cleaning" />
        <meta
          property="og:description"
          content="Each of our Cleaners possess a magical touch, making your home feel brand new again. Serving the Chicagoland area!"
        />
        <meta property="og:image" content="https://ibb.co/6r5MgkX" />
        <meta property="og:url" content="https://www.magicfresh.cleaning/" />
        <meta property="og:type" content="website" />
        <title>Magic Fresh Cleaning</title>
        <meta name="description" content="Cleaning Service" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Navbar /> */}
      <Banner>
        {/* <img src="/homepage/banner-1.png" /> */}
        <ImageCarousel />

        <BtnContainer>
          <Request
            onClick={() => router.push("/book-now")}
            title="Request Cleaning Service"
          />
        </BtnContainer>
      </Banner>
      <Features />
      <Clients />
      <Flag />
      {/* <Footer /> */}
    </div>
  );
}

const Banner = styled.div`
  img {
    width: 100%;
  }
  position: relative;
  /* button {
    position: absolute;
    left: 45%;
    bottom: 10%;
    cursor: pointer;

    @media (max-width: 900px) {
      left: 37%;
    }
  } */
`;

const BtnContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 10%;
`;
