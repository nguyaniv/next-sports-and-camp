import React, { FunctionComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
const CartEmpty: FunctionComponent = () => {
  return (
    <div className="cart__empty">
      <h3>Your Shoping Cart is empty</h3>
      <FontAwesomeIcon icon={faCartArrowDown} />
    </div>
  );
};

export default CartEmpty;
