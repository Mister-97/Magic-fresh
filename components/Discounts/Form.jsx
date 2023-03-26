import React, { useEffect } from "react";
import styled from "styled-components";

const ContactForm = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "//app.shform.com/static_files/js/form.widget.js";
    script.onload = script.onreadystatechange = function () {
      var rs = this.readyState;
      if (rs) if (rs != "complete") if (rs != "loaded") return;
      try {
        new FormWidget().initialize(options).display();
      } catch (e) {}
    };

    const options = {
      id: "Bcnzkg",
      container: "c315",
      height: "330px",
      form: "//app.shform.com/app/embed",
    };

    document.getElementsByTagName("head")[0].appendChild(script);

    return () => {
      document.getElementsByTagName("head")[0].removeChild(script);
    };
  }, []);

  return (
    <Container id="c315">
      <a alt="Create contact form for free" href="https://i1page.com">
        Contact Form
      </a>
    </Container>
  );
};

export default ContactForm;

const Container = styled.div`
  width: 50vw !important;
  @media (max-width: 768px) {
    width: 80vw !important;
  }
  input[type="text"] {
    text-align: center !important;
  }
`;
