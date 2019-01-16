import React, { Component } from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Default from './components/Default';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <Navbar />
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
