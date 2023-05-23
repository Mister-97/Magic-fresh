import React from "react";
import styled from "styled-components";
import Point from "../../components/Legal/Point";

const Contact = () => {
  return (
    <div>
      <Point>
        <h2>Contact Us</h2>
    <!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-P3B6YX70SC"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-P3B6YX70SC');
</script>
        <p>
          We’ll contact you by phone first to address your concerns. If the
          first point of contact doesn’t go though, expect an email from the
          owners of the company. We appreciate all feedback!
        </p>
      </Point>
      <Point>
        <Form action="">
          <div>
            <input type="text" placeholder="First Name" />
          </div>
          <div>
            <input type="text" placeholder="Last Name" />
          </div>
          <div>
            <input type="text" placeholder="Email" />
          </div>
          <div>
            <input type="text" placeholder="Phone Number" />
          </div>
          <div>
            <input type="text" placeholder="Subject" />
          </div>
          <textarea
            name="Comment"
            id=""
            cols="50"
            placeholder="Comment"
            rows="10"
          ></textarea>
          <div>
            <Btn>Submit</Btn>
          </div>
        </Form>
      </Point>
    </div>
  );
};

const Form = styled.form`
  input,
  textarea {
    outline: none;
    background: #ffffff;
    border: 1px solid #000000;
    padding: 10px;
    margin: 10px;
  }
`;

export const Btn = styled.button`
  background-color: #78a5ce;
  border-radius: 9px;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
`;

export default Contact;
