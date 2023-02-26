import React from "react";
import styled from "styled-components";
import Point from "../../components/Legal/Point";
import Select from "react-select";
import { Btn } from "../contact";

const BookNow = () => {
  const optionsService = [
    {
      value: "residential",
      label: "Residential Cleaning",
    },
    {
      value: "airbnb",
      label: "Airbnb",
    },
    {
      value: "move",
      label: "Move In/Out Service",
    },
    {
      value: "carpet",
      label: "Carpet Cleaning",
    },
  ];
  const optionsType = [
    {
      value: "regular",
      label: "Regular Cleaning",
    },
    {
      value: "deepClean",
      label: "Deep Cleaning",
    },
    {
      value: "Move",
      label: "Move In/Out Service",
    },
  ];

  const optionsBedrooms = [
    { value: "Studio", label: "Studio" },
    { value: "1br/1ba", label: "1br/1ba" },
    { value: "2br/1ba", label: "2br/1ba" },
    { value: "2br/2ba", label: "2br/2ba" },
    { value: "3br/1ba", label: "3br/1ba" },
    { value: "3br/2ba", label: "3br/2ba" },
    { value: "3br/2ba", label: "3br/3ba" },
    { value: "4br+", label: "4br+" },
  ];

  return (
    <Container>
      <br />
      <Point>
        <h2>Request a Quote</h2>
        <form action="https://app.shform.com/app/f?id=292" method="POST">
        <Flex>
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="text" placeholder="Email" />
        </Flex>
        <Flex>
          <input type="text" placeholder="Phone" />
          <input type="text" placeholder="Zip Code" />
        </Flex>
        <Flex>
          <Flex>
            <Select options={optionsService} />
            <Spacer></Spacer>
            <Select options={optionsType} />
            <Spacer></Spacer>
            <Select options={optionsBedrooms} />
            <Spacer></Spacer>
          </Flex>
        </Flex>
        <br />
        <textarea
          name="Comments"
          placeholder="Comments"
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <div>
          <Btn>Submit</Btn>
        </div>
      </form>
      </Point>
      <br />
      <Img src="/booking/buildings.png" />
    </Container>
  );
};

export default BookNow;

const Container = styled.div`
  background: #eef6ff;
`;

const Flex = styled.div`
  display: flex;
  /* justify-content: space-around; */
  flex-wrap: wrap;
  input {
    padding: 10px;
    outline: none;
    margin: 20px 20px 20px 0;
  }
  min-height: 40px;
`;

const Spacer = styled.div`
  width: 50px;
  height: 20px;
`;

const Img = styled.img`
  width: 100vw;
`;
