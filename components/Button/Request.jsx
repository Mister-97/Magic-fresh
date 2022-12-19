import React from "react";
import styled from "styled-components";

const Request = ({ title }) => {
  return <Btn>{title}</Btn>;
};

export default Request;

const Btn = styled.button`
  background: #229ff9;
  height: 40px;
  padding: 0px 2px;
  border: none;
  /* font-family: "Oswald"; */
  font-style: italic;
  min-width: 180px;
  font-weight: 700;

  color: #ffffff;

  @media (max-width: 768px) {
    height: 4vh;
    padding: 0px 5px;
    border: none;
    font-size: 12px;
  }
`;
