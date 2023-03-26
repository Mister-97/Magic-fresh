import axios from "axios";
import { useState } from "react";
import styled from "styled-components";

const StripeCheckout = ({ price }) => {
  const [loading, setLoading] = useState(false);
  const [session, setSession] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Create a Checkout Session.
    const {
      data: { session: checkoutSession },
    } = await axios.post("/api/checkout-sessions", {
      amount: 5,
    });
    console.log(checkoutSession);

    if (checkoutSession.statusCode === 500) {
      console.error(checkoutSession.message);
      return;
    }
    setSession(checkoutSession);
    window.location.href = checkoutSession.url;
  };

  return (
    <>
      <StyledButton onClick={handleSubmit} disabled={loading}>
        {loading ? "Loading..." : `Purchase Raffle Ticket!`}
      </StyledButton>
    </>
  );
};

export default StripeCheckout;

const StyledButton = styled.button`
  background-color: #6772e5;
  border-radius: 6px;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  padding: 12px 24px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #5469d4;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.5);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";

// // Make sure to call `loadStripe` outside of a component’s render to avoid
// // recreating the `Stripe` object on every render.
// const stripePromise = loadStripe(
//   "pk_test_51Mpc4LJFRYcpHqZcm8AFbQ9rUThNXPjRFHV2oipnFtjhX3erMyuKCl2Z6g1e0YSVAmqOE07FletM206lpPzYQYVH00d3i61ksN"
// );

// export default function App() {
//   const options = {
//     // passing the client secret obtained from the server
//     clientSecret: "{{CLIENT_SECRET}}",
//   };

//   return (
//     <Elements stripe={stripePromise} options={options}>
//       <CheckoutForm />
//     </Elements>
//   );
// }
