import { loadStripe } from "@stripe/stripe-js";
import Stripe from "stripe";

const getStripe = async () => {
  //   const stripe = await loadStripe(
  //     process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  //   );
  //   return stripe;

  const stripe = Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);
  return stripe;
};

export default getStripe;
