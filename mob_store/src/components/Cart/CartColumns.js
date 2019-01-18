import React from 'react';

export default function CartColumns() {
  return (
    <div className="cart__title">
      <div className="cart__picture">
        <p className="cart__title-text">Products</p>
      </div>
      <div className="cart__name">
        <p className="cart__title-text">Name</p>
      </div>
      <div className="cart__price">
        <p className="cart__title-text">Price</p>
      </div>
      <div className="cart__quantity">
        <p className="cart__title-text">Quantity</p>
      </div>
      <div className="cart__remove">
        <p className="cart__title-text">Remove</p>
      </div>
      <div className="cart__total">
        <p className="cart__title-text">Total</p>
      </div>
    </div>
  );
}
