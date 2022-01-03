import { NextApiRequest, NextApiResponse } from 'next';
import { product } from '../../cmps/Store/store-products';
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

async function CreateStripeSession(req: NextApiRequest, res: NextApiResponse) {
  const { items } = req.body;

  const redirectURL =
    process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : '';

  const transformedItems = await items.map((item: product) => {
    return {
      price_data: {
        currency: 'usd',
        product_data: {
          images: [item.imgURL],
          name: item.name,
        },
        unit_amount: item.price * 100,
      },
      description: item.name,
      quantity: item.quantity,
    };
  });

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: transformedItems,
    mode: 'payment',
    success_url: redirectURL + '?status=success',
    cancel_url: redirectURL + '?status=cancel',
  });

  res.json({ id: session.id });
}

export default CreateStripeSession;
