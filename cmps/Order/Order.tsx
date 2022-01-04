import React, { useState } from 'react';
import { orderModel } from './../../models/order';

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
          {order.items.map((item: any) => {
            return (
              <div>
                {' '}
                <span>{item.name}</span> <span>${item.price}</span>{' '}
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
