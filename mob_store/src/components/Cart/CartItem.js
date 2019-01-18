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
      <div className="cart__product-item-quantity">
        <button
          className="cart__product-item-btn"
          onClick={() => decrement(id)}>
          -
        </button>
        <p>{count}</p>
        <button
          className="cart__product-item-btn"
          onClick={() => increment(id)}>
          +
        </button>
      </div>
      <div className="cart__product-item-remove">
        <button
          onClick={() => removeItem(id)}
          className="cart__product-item-remove-icon">
          <i className="fas fa-trash" />
        </button>
      </div>
      <div className="cart__product-item-total">
        <strong>Item total: {total}$</strong>
      </div>
    </div>
  );
};

export default CartItem;
