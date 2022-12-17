import React from "react";
import styled from "styled-components";
import Feature from "./Feature";

const Features = () => {
  return (
    <div>
      <TryOut>
        <div>
          <div>
            <h3>Must Be Magic</h3>
            <p>
              Magic Fresh is a cleaning service that serves the Chicagoland
              area. Our main goal is customer satisfaction, which means that our
              clients' satisfaction is our top priority. Because each of our
              Cleaners possesses a magical touch, each cleaning will have your
              home feeling brand new again.
            </p>
          </div>
        </div>
        <img src="/homepage/magic.png" />
      </TryOut>
      <Feature img="/homepage/proven-process.png">
        <div>
          <h2>Our Proven Process</h2>
          <ul>
            <li>
              <strong>Clean and Sanitize –</strong> In addition to our regular
              cleaning procedures, our crew will additionally sanitize light
              switches, doorknobs, telephones, bathroom surfaces, and other
              locations that are frequently handled.
            </li>

            <li>
              <strong>Professional Staff –</strong> Our residential housekeepers
              have received considerable training to thoroughly clean every room
              in your house according to your individual demands, providing the
              high-quality clean you want.
            </li>
            <li>
              <strong>24-Hour Warranty –</strong> If there is ever a time that
              you are unhappy with any part of our latest services, just phone
              us within 24 hours, and we'll work with you to find a solution.
            </li>
            <li>
              <strong>No Contracts –</strong> One benefit of choosing Magic
              Fresh is that contracts are never an option.
            </li>
          </ul>
        </div>
      </Feature>
      <Feature reverse img="/homepage/brand-new.png">
        <div>
          <h2>With a little magic, make your home feel brand new again</h2>

          <p>
            Your home is more than just a home, it’s a place where memories are
            made and moments are treasured. The simple things in life should not
            be complicated, even if life can be. Magic Fresh strives to remove
            stress from your day so you can live your life on your terms. With a
            little magic, you can make your home feel brand new again.
          </p>
        </div>
      </Feature>
      <Feature img="/homepage/guarantee.png">
        <div>
          <h2>Our Worry Free Guarantee</h2>
          <p>
            When you entrust your space to the Magic Fresh® team, you can relax
            knowing that your home is in good hands. You have the right to be
            confident that you will receive consistently flawless results from
            friendly, dependable professionals. Magic Fresh® offers the
            assistance you require. Our Worry-Free Guarantee reflects our
            willingness to go above and beyond to ensure your home is always a
            sanctuary. If you are dissatisfied with our recent visit for any
            reason, please let us know within 24 hours and we will return to
            make things right.
          </p>
        </div>
      </Feature>
    </div>
  );
};

export default Features;

const TryOut = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  img {
    width: 25vw;
    @media (max-width: 900px) {
      width: 35vw;
    }
  }
  div {
    position: relative;
    flex: 1;
    div {
      box-shadow: -15px 15px 9px -7px rgba(0, 0, 0, 0.25);
      width: 40vw;
      h3 {
        text-align: center;
      }
      p {
        text-align: center;
        font-family: "Arial";
        font-style: normal;
        font-weight: 400;
        /* or 75px */

        text-align: center;

        color: #7c7c7c;
      }
      position: absolute;
      top: 20%;
      left: 70%;
      background: white;
      padding: 20px;
      max-width: 350px;

      @media (max-width: 900px) {
        width: 50vw;
        left: 40%;
        top: 13%;
        padding: 6px;
        h3 {
          font-size: 11px;
        }
        p {
          font-size: 9px;
        }
      }
    }
  }
`;
