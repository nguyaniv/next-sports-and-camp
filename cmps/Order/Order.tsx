import React, { useState } from "react";
import { orderModel } from "./../../models/order";
import { product } from "../Store/store-products";
interface Order {
  order: orderModel;
}

const Order: React.FC<Order> = ({ order }) => {
  return (
    <div className={`orders__item`}>
      <h3> {order.createdAt}</h3>
      <div className="orders__item__details">
        <h4 className="orders__item__details--headline">
          Thanks for using my app
        </h4>
        <ul className="orders__item__details--adress">
          <li>{order.user}</li>
          <li>Next Sports and camp</li>
        </ul>

        <div className="orders__item__details--products">
          {order.items.map((item: product) => {
            return (
              <div key={item.name}>
                {" "}
                <span>{item.name}</span> <span>${item.price}</span>{" "}
              </div>
            );
          })}
        </div>
        <div className="orders__item__details--total">
          <strong>total : ${order.price}</strong>
        </div>
      </div>
    </div>
  );
};

export default Order;
