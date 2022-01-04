import type { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../utills/mongodb';
const ObjectId = require('mongodb').ObjectId;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // getting user email as a props
  let orders;
  console.log('hi');

  try {
    const { user } = await req.body;
    let { db } = await connectToDatabase();
    orders = await db.collection('orders').find({ user: user }).toArray();
  } catch (error) {
    console.log(error || 'sonthing went wrong');
  }
  return res.json({
    orders: JSON.parse(JSON.stringify(orders)),
  });
}
