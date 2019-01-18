import React from 'react';

const CartItem = ({ item, value }) => {
  const { id, title, img, price, total, count } = item;
  const { increment, decrement, removeItem } = value;
  return (
    <div className="cart__product-item">
      <div className="cart__product-item-picture">
        <img
          src={img}
          alt={`product-${id}`}
          className="cart__product-item-picture-img"
        />
      </div>
      <div className="cart__product-item-name">
        <p>{title}</p>
      </div>
      <div className="cart__product-item-price">
        <p>{price}$</p>
      </div>
      <div className="cart__product-item-quantiti">
        <p>{count}</p>
      </div>
      <div className="cart__product-item-remove">
        <p>remove</p>
      </div>
      <div className="cart__product-item-total">
        <p>{total}</p>
      </div>
    </div>
  );
};

export default CartItem;
