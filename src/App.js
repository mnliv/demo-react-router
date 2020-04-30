import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navigation from './components/Navigation'
import Products from './page/Products'
import { CartProvider } from './contexts/Cart'


class App extends React.Component {
  render() {
    return(
      <CartProvider>
        <Router>
            <div className="App">
              <Navigation></Navigation>
              
              <Switch>
              <Route path="/products">
                <Products />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      </CartProvider>
    )
  }
}

function Home() {
  return <h2>Home</h2>;
}

export default App;
