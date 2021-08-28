import React, { Component, useState } from 'react';
import './App.css';
import Basket from './components/Basket/Basket';
import Header from './components/Header/Header';
import ProductList from './components/ProductList/ProductList';
import { product } from './pruduct';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

class App extends Component {
  state = {
    data: product,
    basket: []
  }
  componentDidMount() {
    this.setState({
      basket: JSON.parse(localStorage.getItem('cart')) || []
    })
  }

  componentDidUpdate(props, prev) {
    if (props.state !== this.state.basket) {
      localStorage.setItem('cart', JSON.stringify(this.state.basket))
    }
  }
  onDelete = (id) => {
    this.setState(({ basket }) => {
      const index = basket.findIndex(elem => elem.cart.id === id);
      const newArr = [...basket.slice(0, index), ...basket.slice(index + 1)];
      return {
        basket: newArr
      }
    })
  }
 
  onAddToCart = (id) => {
    const check = this.state.basket.every(elem => elem.cart.id !== id);
    if (check) {
      this.setState(({ data, basket }) => {
        const item = data.find(elem => elem.id === id);
        const newItem = {
          cart: { ...item },
        }
        const newArr = [...basket, newItem];
        return {
          basket: newArr
        }
      })
    } else {
      alert('Товар добален в корзину')
    }
  }
  render() {
    const { data, basket } = this.state;
    return (
      <Router >
        <div>
          <Header basket={basket} />
        </div>
        <Switch>
          <Route path="/menu">
            <ProductList
              onAddToCart={this.onAddToCart}
              data={data} />
          </Route>
          <Route path='/basket'>
            <Basket
              onDelete={this.onDelete}
              basket={basket} />
          </Route>
        </Switch>
        {/* <Details/> */}
      </Router>
    );
  }
}

export default App;