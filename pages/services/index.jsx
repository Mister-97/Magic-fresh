import React, { useState } from "react";
import Select from "react-select";
import styled from "styled-components";
import Airbnb from "../../components/Services/Airbnb";
import Move from "../../components/Services/Move";
import Regular from "../../components/Services/Regular";

const Services = () => {
  const options = [
    { value: "regular", label: "Regular or Deep Cleaning" },
    { value: "move", label: "Move In/Out Service" },
    { value: "airbnb", label: "AirBnb" },
  ];
  const [renderPage, setRenderPage] = useState("regular");

  const handleChange = (e) => {
    setRenderPage(e.value);
  };
  return (
    <div>
      <H2>What Services Do you Need?</H2>
      <Wrapper>
        <Select onChange={handleChange} options={options} />
      </Wrapper>
      {renderPage === "regular" && <Regular />}
      {renderPage === "move" && <Move />}
      {renderPage === "airbnb" && <Airbnb />}
    </div>
  );
};

export default Services;

const H2 = styled.h2`
  text-align: center;
`;

const Wrapper = styled.div`
  width: 50vw;
  margin-left: auto;
  margin-right: auto;
`;
