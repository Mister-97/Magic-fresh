import getStripe from "../../components/Discounts/stripe";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const stripe = await getStripe();
    try {
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            price_data: {
              currency: "usd",
              product_data: {
                name: "Discount Raffle",
                description: "Discount Raffle For Magic Fresh",
              },
              unit_amount: 500,
            },
            quantity: 1,
          },
        ],
        mode: "payment",
        payment_method_types: ["card", "cashapp"],
        success_url: `${req.headers.origin}/success`,
        cancel_url: `${req.headers.origin}/canceled`,
      });

      return res.status(200).json({ session });
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
