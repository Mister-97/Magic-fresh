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
    padding: 0  0px 30px 30px;
    //  background: rgba(34, 159, 249, 0.27);

    @media(max-width: 900px){
      width: 80vw;
      height: auto;
      padding-top:30px;
    }
  }
  
  h2,p {
    font-family: "poppins";
    font-style: normal;
    font-weight: 400;
 

    color: #000000;
    padding-left: 5vw;
    padding-right: 5vw;
  }

  p {
    font-family: "Oswald";
    font-style: normal;
    font-weight: 400;

    padding-left: 5vw;
    padding-right: 5vw;
    color: #656565;
  }
  display: flex;
  align-items: center;
  flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};
  @media (max-width: 900px) {
    flex-direction: column;
  }
  padding: 5vw;
  padding-right: 15vw;
  padding-left: 15vw;
  ul {
    list-style: none;
    color: #656565;
    padding-left: 5vw;
    padding-right: 5vw;
  li {
    padding: 20px 0;
  }

`;
