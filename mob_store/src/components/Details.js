import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';

export default class Deteils extends Component {
  render() {
    return (
      <main className="main">
        <ProductConsumer>
          {value => {
            const {
              id,
              company,
              title,
              img,
              price,
              info,
              inCart,
            } = value.detailProduct;
            return (
              <div className="details">
                <div className="details__title">
                  <h1 className="details__title-text">{title}</h1>
                </div>
                <div className="product-info">
                  <div className="product-info__image">
                    <img
                      src={img}
                      alt={`product-${id}`}
                      className="product-info__image-img"
                    />
                  </div>
                  <div className="product-info__dscr">
                    <h2 className="product-info__dscr-title">Model: {title}</h2>
                    <h3 className="product-info__dscr-made">
                      Made by: <span>{company}</span>
                    </h3>
                    <h4 className="product-info__dscr-price text-blue">
                      <strong>
                        Price: <span>{price}$</span>
                      </strong>
                    </h4>
                    <p className="product-info__dscr-info--title">
                      Some info About Product:
                    </p>
                    <p className="product-info__dscr-info--text">{info}</p>
                    <div className="product-info__dscr-buttons">
                      <Link to="/" className="product-info__dscr-link">
                        <button className="button back-btn ">
                          Back to products
                        </button>
                      </Link>
                      <button
                        className="button cart-btn"
                        disabled={inCart ? true : false}
                        onClick={() => {
                          value.addToCart(id);
                          value.openModal(id);
                        }}>
                        {inCart ? 'in cart' : 'add to cart'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          }}
        </ProductConsumer>
      </main>
    );
  }
}
