import React from 'react';
import { product } from '../Store/store-products';
import CartEmpty from './CartEmpty';
import CartItem from './CartItem';

interface CartList {
  onToggle: any;
  cartItems: any;
}

const CartList: React.FC<CartList> = ({ onToggle, cartItems }) => {
  return (
    <>
      <div className="cart__heading">
        <button onClick={onToggle}>X</button>
        <h2>Shopping Cart</h2>
      </div>
      {!cartItems || cartItems.length === 0 ? (
        <CartEmpty />
      ) : (
        <div className="cart__list">
          <div className="cart__details">
            <li>name</li>
            <li>ammout</li>
            <li>img</li>
          </div>
          {cartItems &&
            cartItems.map((item: product) => {
              return <CartItem key={item.name} item={item} />;
            })}
          {/* <div className="cart__total">total: ${returnTotal()}</div>
          <button
            onClick={() => dispatch(onChangeModal())}
            className="cart__btn--finish"
          >
            Procces to checkout
          </button> */}
        </div>
      )}
    </>
  );
};

export default CartList;
