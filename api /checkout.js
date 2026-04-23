import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  const { items } = req.body;

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",
    line_items: items,
    success_url: "https://caribena.vercel.app/success",
    cancel_url: "https://caribena.vercel.app",
  });

  res.json({ url: session.url });
}
