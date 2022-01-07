import { product } from "../cmps/Store/store-products";

export interface orderModel {
  _id: string;
  user: string;
  items: product[];
  createdAt: string;
  price: number;
}
