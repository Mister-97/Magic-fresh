import React from "react";
import styled from "styled-components";

const Feature = ({ img, children, reverse }) => {
  return (
    <Container reverse={reverse}>
      {children}
      <img src={img} alt="" />
    </Container>
  );
};

export default Feature;
const Container = styled.div`
  img {
    height: 40vh;

    @media(max-width: 900px){
      width: 80vw;
      height: auto
    }
  }
  h2,p {
    font-family: "Oswald";
    font-style: normal;
    font-weight: 400;

    color: #000000;
    padding-left: 3vw;
  }

  p {
    font-family: "Oswald";
    font-style: normal;
    font-weight: 400;

    padding-left: 3vw;
    color: #656565;
  }
  display: flex;
  align-items: center;
  flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};

  @media (max-width: 900px) {
    flex-direction: column;
  }

  padding: 5vw;
  ul {
    list-style: none;
    color: #656565;
    padding-left: 3vw;
  li {
    padding: 20px 0;
  }

`;
