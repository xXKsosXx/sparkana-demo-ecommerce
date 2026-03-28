export const dynamic = "force-dynamic";

import Stripe from "stripe";

function getStripe() {
  return new Stripe(process.env.STRIPE_SECRET_KEY || "sk_test_placeholder");
}

export async function POST(req: Request) {
  const { items } = await req.json();
  const stripe = getStripe();

  const line_items = items.map((item: { nom: string; parfum: string; prix: number; quantity: number }) => ({
    price_data: {
      currency: "eur",
      product_data: { name: item.nom, description: item.parfum },
      unit_amount: Math.round(item.prix * 100),
    },
    quantity: item.quantity,
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items,
    mode: "payment",
    success_url: `${process.env.NEXT_PUBLIC_URL}/merci`,
    cancel_url: `${process.env.NEXT_PUBLIC_URL}`,
    shipping_address_collection: { allowed_countries: ["FR", "BE", "CH"] },
    shipping_options: [
      {
        shipping_rate_data: {
          type: "fixed_amount",
          fixed_amount: { amount: 0, currency: "eur" },
          display_name: "Livraison offerte",
          delivery_estimate: {
            minimum: { unit: "business_day", value: 3 },
            maximum: { unit: "business_day", value: 5 },
          },
        },
      },
    ],
  });

  return Response.json({ url: session.url });
}
