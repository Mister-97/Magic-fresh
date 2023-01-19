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

export default function Home() {
  const router = useRouter();
  return (
    <div className={styles.container} style={{width: "100%"}}>
      <Head>
        <title>Magic Fresh</title>
        <meta name="description" content="Cleaning Service" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Navbar /> */}
      <Banner>
        <img src="/homepage/banner.jpeg" />
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
