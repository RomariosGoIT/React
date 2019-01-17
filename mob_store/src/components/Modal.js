import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';

export default class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { modalOpen, closeModal } = value;
          const { img, title, price, id } = value.modalProduct;

          if (!modalOpen) {
            return null;
          } else {
            return (
              <div className="modal">
                <div className="modal__product">
                  <h2 className="modal__product-title">
                    Item added to the cart
                  </h2>
                  <div className="modal__product-image">
                    <img
                      src={img}
                      alt={`product-${id}`}
                      className="modal__product-image-img"
                    />
                  </div>
                  <h2 className="modal__product-name">{title}</h2>
                  <p className="modal__product-price">Price: {price}$</p>
                  <Link
                    to="/"
                    onClick={() => closeModal()}
                    className="button back-btn">
                    Continue shopping
                  </Link>
                  <Link
                    to="/cart"
                    className="button cart-btn"
                    onClick={() => closeModal()}>
                    Go to cart
                  </Link>
                </div>
              </div>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}
