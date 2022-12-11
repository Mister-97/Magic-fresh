import React from "react";
import styled from "styled-components";
import Point from "../../components/Legal/Point";
import Select from "react-select";
import { Btn } from "../contact";

const BookNow = () => {
  return (
    <Container>
      <br />
      <Point>
        <h2>Request a Quote</h2>
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
          {/* <Select options={options} /> */}
          <Flex>
            <select name="" id="">
              <option value="Residential Cleaning">Residential Cleaning</option>
              <option value="Airbnb">Airbnb</option>
              <option value="Move in/out service">Move in/out service</option>
              <option value="Carpet Cleaning">Carpet Cleaning</option>
            </select>
            <Spacer></Spacer>
            <select name="" id="">
              <option value="Residential Cleaning">Regular Cleaning</option>
              <option value="Airbnb">Deep Cleaning</option>
              <option value="Move in/out service">Move in/out service</option>
            </select>
            <Spacer></Spacer>
            <select name="" id="">
              <option value="Studio">Studio</option>
              <option value="1br/ba">1br/ba</option>
              <option value="2br/ba">2br/1ba</option>
              <option value="2br/2ba">2br/2ba</option>
              <option value="3br/1ba">3br/1ba</option>
              <option value="3br/2ba">3br/2ba</option>
              <option value="3br/3ba">3br/3ba</option>
              <option value="4br+">4br+</option>
            </select>
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
  input {
    padding: 10px;
    outline: none;
    margin: 20px 20px 20px 0;
  }

  min-height: 40px;
`;

const Spacer = styled.div`
  width: 50px;
`;

const Img = styled.img`
  width: 100vw;
`;
