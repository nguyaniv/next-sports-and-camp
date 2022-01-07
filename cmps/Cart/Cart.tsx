import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { onChangeModal, onGetItems } from "../../features/cart/cartSlice";
import { useAppSelector } from "../../app/hooks";
import { getItems, removeAllItems } from "../../utills/utills";
import { useAppDispatch } from "../../app/hooks";
import { product } from "../Store/store-products";
import CartList from "./CartList";
import { useRouter } from "next/router";
const Cart: React.FC = () => {
  const [toggle, setToggle] = useState(false);
  const items = useAppSelector((state) => state.cart.items);
  const [cartItems, setcartItems] = useState([]);
  const [cartEffect, setCartEffect] = useState(false);
  const [cartLength, setCartLength] = useState(0);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const onCartLength = () => {
    if (!cartItems || cartItems.length < 1) return 0;
    let length = 0;
    items.forEach((item) => (length += item.quantity));
    setCartLength(length);
  };

  const checkStatus = async () => {
    if (router.query.status && router.query.status === "success") {
      await removeAllItems();
      dispatch(onGetItems);
    }
  };

  const updateCart = async () => {
    let updatedCart = await getItems();
    if (!updatedCart) {
      setcartItems([]);
      return setCartLength(0);
    }
    setCartEffect(true);
    setTimeout(() => {
      setCartEffect(false);
    }, 500);
    await setcartItems(updatedCart);
    let length = 0;
    updatedCart.forEach((cartItem: product) => (length += cartItem.quantity!));
    setCartLength(length);
  };

  const returnTotal = () => {
    let total = 0;
    cartItems.forEach((item: product) => {
      total += item.quantity! * item.price;
    });
    return total;
  };

  const onToggle = () => {
    setToggle(toggle ? false : true);
  };

  useEffect(() => {
    checkStatus();
  }, []);

  useEffect(() => {
    updateCart();
  }, [items]);

  return (
    <div
      className={
        !toggle ? `cart__disable  ${cartEffect ? "rotate" : ""}` : "cart"
      }
    >
      {!toggle ? (
        <div onClick={onToggle} className="cart__disable--toggle">
          <div className="cart__disable--ammout">{cartLength}</div>
          <FontAwesomeIcon icon={faCartPlus} />
        </div>
      ) : (
        <>
          <CartList onToggle={onToggle} cartItems={cartItems} />

          <div className="cart__total">total: ${returnTotal()}</div>
          <button
            onClick={() => dispatch(onChangeModal())}
            className="cart__btn--finish"
          >
            Procces to checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
