import Image from "next/image";
import React, { useEffect, useState } from "react";
import { onChangeModal } from "../../features/cart/cartSlice";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { useUser } from "@auth0/nextjs-auth0";

const CheckOut = () => {
  const modal = useAppSelector((state) => state.cart.checkoutModal);
  const items = useAppSelector((state) => state.cart.items);
  const [isModal, setisModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const { user, error, isLoading } = useUser();

  useEffect(() => {
    setisModal(modal);
  }, [modal]);

  const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
  const stripePromise = loadStripe(publishableKey!);

  const createCheckOutSession = async () => {
    setLoading(true);
    const stripe = await stripePromise;
    const checkoutSession = await axios.post("/api/create-stripe-session", {
      items: items,
      user: user?.email || null,
    });
    const result = await stripe!.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });
    if (result.error) {
      alert(result.error.message);
    }
    setLoading(false);
  };

  return (
    <div
      onClick={() => {
        dispatch(onChangeModal());
      }}
      className={!isModal ? "checkout" : "checkout__active"}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="checkout__container"
      >
        <div className="checkout__grid">
          <ul className="checkout__details">
            <li>name</li>
            <li>ammout</li>
            <li>price</li>
            <li>image</li>
          </ul>
          {items &&
            items.map((item) => {
              return (
                <ul key={item.name} className="checkout__item">
                  <li>{item.name}</li>
                  <li>{item.quantity}</li>
                  <li>${item.price * item.quantity} </li>
                  <li>
                    {" "}
                    <Image
                      width={70}
                      height={70}
                      src={item.imgURL}
                      alt={item.name}
                    />{" "}
                  </li>
                </ul>
              );
            })}
        </div>
        <div className="checkout__btn">
          <button onClick={createCheckOutSession}>Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
