import { NextApiRequest, NextApiResponse } from 'next';
import { product } from '../../cmps/Store/store-products';
import { connectToDatabase } from '../../utills/mongodb';

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

async function CreateStripeSession(req: NextApiRequest, res: NextApiResponse) {
  const { items, user } = req.body;

  const redirectURL =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : 'https://next-sports-and-camp.vercel.app';

  let total = 0;

  const transformedItems = await items.map((item: product) => {
    total += item.price;
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

  let session;
  try {
    session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: transformedItems,
      mode: 'payment',
      success_url: redirectURL + '?status=success',
      cancel_url: redirectURL + '?status=cancel',
    });
  } catch (error) {
    console.log(error || console.log('couldnt create a session'));
  }
  if (user === null) return res.json({ id: session.id });

  try {
    let { db } = await connectToDatabase();
    let orders = await db.collection('orders');
    const date = new Date();
    const time = await date.toUTCString();

    await orders.insertOne({ user, items, createdAt: time, price: total });
    db.close();
  } catch (error) {}

  res.json({ id: session.id });
}

export default CreateStripeSession;
