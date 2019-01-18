import React, { Component } from 'react';
import CartColumns from './CartColumns';
import Title from '../Title';
import EmptyCart from './EmptyCart';
import CartList from './CartList';
import CartTotals from './CartTotals';
import { ProductConsumer } from '../../context';

export default class Cart extends Component {
  render() {
    return (
      <main className="main">
        <ProductConsumer>
          {value => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <React.Fragment>
                  <Title name="your" title="cart" />
                  <div className="cart">
                    <CartColumns />
                    <CartList value={value} />
                    <CartTotals value={value} />
                  </div>
                </React.Fragment>
              );
            } else {
              return <EmptyCart />;
            }
          }}
        </ProductConsumer>
      </main>
    );
  }
}
