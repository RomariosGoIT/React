import React, { Component } from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer';
import Default from './components/Default';
import Modal from './components/Modal';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <Navbar />
          <Modal />
          <Switch>
            <Route exact path="/" component={ProductList} />
            <Route path="/details" component={Details} />
            <Route path="/cart" component={Cart} />
            <Route component={Default} />
          </Switch>
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
