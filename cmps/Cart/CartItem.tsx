import Image from "next/image";
import React from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { addItem, removeItem } from "../../utills/utills";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleUp,
  faArrowCircleDown,
} from "@fortawesome/free-solid-svg-icons";
import { onGetItems } from "../../features/cart/cartSlice";
import { product } from "../Store/store-products";

interface Item {
  item: product;
}

const CartItem: React.FC<Item> = ({ item: item }) => {
  const dispatch = useAppDispatch();

  return (
    <div className="cart__item">
      <li>{item.name}</li>
      <li>
        <button
          onClick={async () => {
            await addItem(item);
            await dispatch(onGetItems());
          }}
          className="cart__btn--small"
        >
          <FontAwesomeIcon size="2x" icon={faArrowCircleUp} />
        </button>
        <span className="cart__item--quantity">{item.quantity}</span>
        <button
          onClick={async () => {
            await removeItem(item.name, item.price);
            await dispatch(onGetItems());
          }}
          className="cart__btn--small"
        >
          <FontAwesomeIcon size="2x" icon={faArrowCircleDown} />
        </button>
      </li>
      <li className="cart__item--image">
        <Image
          src={item.imgURL}
          width={75}
          height={75}
          alt={item.name}
          layout="responsive"
        />
      </li>
    </div>
  );
};

export default CartItem;
