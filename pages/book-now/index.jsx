import React from "react";
import styled from "styled-components";
import Point from "../../components/Legal/Point";
import Select from "react-select";
import { Btn } from "../contact";
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
            'height': '755px',
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
