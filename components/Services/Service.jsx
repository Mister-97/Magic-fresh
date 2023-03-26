import React from "react";
import styled from "styled-components";

const Service = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Service;

const Container = styled.div`
  img {
    width: 40vw;
    border: 0.5px solid #5f5f5f;
    padding: 5px;
  }
  display: flex;
  justify-content: space-around;
  padding: 40px;
  align-items: center;
  @media (max-width: 900px) {
    flex-direction: column;
  }
  ul {
    list-style: none;
  }
  li {
    color: #535353;
    padding: 2px;
  }
  a {
    color: #229ff9;
  }
`;
