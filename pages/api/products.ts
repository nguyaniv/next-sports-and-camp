import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../utills/mongodb';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // switch the methods

  try {
    // connect to the database
    let { db } = await connectToDatabase();
    // fetch the posts
    let products = await db.collection('products').find({}).toArray();
    // return the posts
    return res.json({
      items: JSON.parse(JSON.stringify(products)),
      success: true,
    });
  } catch (error) {
    // return the error
    return res.json({
      message: 'couldnt Complate the proccess',
      success: false,
    });
  }
}
