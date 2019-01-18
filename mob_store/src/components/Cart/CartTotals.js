import React from 'react';
import { Link } from 'react-router-dom';

const CartTotals = ({ value }) => {
  const { cartSubTotal, cartTax, cartTotal, clearCart } = value;
  return (
    <div className="cart__totals">
      <Link
        to="/"
        className="cart__totals-btn cart-btn button"
        onClick={() => clearCart()}>
        Clear Cart
      </Link>
      <span className="cart__totals-subtotal">Subtotal: {cartSubTotal}$</span>
      <span className="cart__totals-tax">Tax: {cartTax}$</span>
      <span className="cart__totals-total">Total: {cartTotal}$</span>
    </div>
  );
};

export default CartTotals;
