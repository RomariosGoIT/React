import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context';
import PropTypes from 'prop-types';

export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <ProductConsumer>
        {value => {
          return (
            <div className="product__card">
              <div
                className="product__card-container"
                onClick={() => value.handleDetail(id)}>
                <Link to="/details">
                  <img
                    src={img}
                    alt={`card-${id}`}
                    className="product__card-container-img"
                  />
                </Link>
                <button
                  className="product__card-btn"
                  disabled={inCart ? true : false}
                  onClick={() => {
                    value.addToCart(id);
                    value.openModal(id);
                  }}>
                  {inCart ? (
                    <p className="product__card-btn-text" disabled>
                      In Cart
                    </p>
                  ) : (
                    <i className="fas fa-cart-plus" />
                  )}
                </button>
              </div>
              <div className="product__card-footer">
                <h5 className="product__card-footer-title">{title}</h5>
                <p className="product__card-footer-price text-blue">{price}$</p>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool,
  }),
};
