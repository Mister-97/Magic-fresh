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
        <iframe name="cYjZUcwiYjZUcw" id="cYjZUcwiYjZUcw" src="//app.shform.com/app/embed?id=YjZUcw&amp;sid=0&amp;p=1&amp;t=1&amp;reset=1&amp;js=1&amp;rec=1&amp;parentUrl=https%3A%2F%2Fapp.shform.com%2Fapp%2Fform%3Fid%3DYjZUcw&amp;title=Request%20a%20Quote%20magicfresh.cleaning&amp;url=https%3A%2F%2Fapp.shform.com%2Fapp%2Fform%3Fid%3DYjZUcw&amp;referrer=https%3A%2F%2Fapp.shform.com%2Fform%2Fshare%3Fid%3D292" scrolling="no" frameborder="0" style="width: 100%; height: 570px;"></iframe>
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
