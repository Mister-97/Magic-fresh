import React from "react";
import Point from "../../components/Legal/Point";

const FAQ = () => {
  return (
    <div>
      <h2
        style={{
          textAlign: "center",
          color: "#656565",
        }}
      >
        Frequently Asked Questions
      </h2>
      <br />
      <Point>
        <strong>
          What should the customer know about your pricing (e.g., discounts,
          fees)?
        </strong>
        <p>
          Sign up for our newsletter on our website and you’ll be updated on
          discounts.
        </p>
      </Point>
      <Point>
        <strong>
          What is your typical process for working with a new customer?
        </strong>
        <p>
          We give you an estimate quote, ask for a little more details, exchange
          phone numbers, set a date and clean!
        </p>
      </Point>

      <Point>
        <strong>
          What education and/or training do you have that relates to your work?
        </strong>
        <p>We have a standard training that all employees take.</p>
      </Point>
      <Point>
        <strong>How did you get started doing this type of work?</strong>
        <p>
          We noticed there was a problem with quality and customer satisfaction.
          With our 10+ years of customer service, we knew this was a problem we
          can solve.
        </p>
      </Point>

      <Point>
        <strong>What types of customers have you worked with?</strong>
        <p>All kinds.</p>
      </Point>

      <Point>
        <strong>
          Describe a recent project you are fond of. How long did it take?
        </strong>
        <p>
          4 bedroom 3 bathroom. A customer had a bad experience with previous
          cleaners, we were able to finally give her a good experience!
        </p>
      </Point>

      <Point>
        <strong>
          What advice would you give a customer looking to hire a provider in
          your area of work?
        </strong>
        <p>
          Keep looking until you find the perfect cleaner service that works
          best for you. Fortunately you won’t have to look to hard because we
          got you covered!
        </p>
      </Point>

      <Point>
        <strong>
          What questions should customers think through before talking to
          professionals about their project?
        </strong>
        <p>Have they worked with a similar house like this before.</p>
      </Point>
    </div>
  );
};

export default FAQ;
