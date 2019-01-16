import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context';

export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <div className="product__card">
        <h3 className="product__card-title">{title}</h3>
        <div
          className="product__card-img-container"
          onClick={() => console.log('img click')}>
          <Link to="/details">
            <img src={img} alt={`card-${id}`} className="product__card-img" />
          </Link>
        </div>
        <p className="product__card-price">Price: {price}$</p>
      </div>
    );
  }
}
