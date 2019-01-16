import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';

export default class Navbar extends Component {
  render() {
    return (
      <header className="navbar">
        <Link to="/" className="navbar__logo">
          <img src={logo} alt="logo" className="navbar__logo-img" />
        </Link>
        <ul className="navbar__list">
          <li className="navbar__item">
            <Link to="/" className="navbar__link">
              Products
            </Link>
          </li>
          <li className="navbar__item">
            <Link to="/cart" className="navbar__link">
              <span className="navbar__cart-icon">
                <i className="fas fa-cart-plus" />
              </span>
              My cart
            </Link>
          </li>
        </ul>
      </header>
    );
  }
}
