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
    <!-- Shform -->
<div id="c292">
   <a alt="Create contact form for free" href="https://i1page.com">Free contact form builder</a>
</div>
<script type="text/javascript">
    (function(d, t) {
        var s = d.createElement(t), options = {
            'id': 'YjZUcw',
            'container': 'c292',
            'height': '530px',
            'form': '//app.shform.com/app/embed'
        };
        s.type= 'text/javascript';
        s.src = '//app.shform.com/static_files/js/form.widget.js';
        s.onload = s.onreadystatechange = function() {
            var rs = this.readyState; if (rs) if (rs != 'complete') if (rs != 'loaded') return;
            try { (new FormWidget()).initialize(options).display() } catch (e) { }
        };
        var scr = d.getElementsByTagName(t)[0], par = scr.parentNode; par.insertBefore(s, scr);
    })(document, 'script');
</script>
<!-- End Shform -->

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
