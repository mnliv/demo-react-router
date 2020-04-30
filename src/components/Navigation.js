import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,

} from 'reactstrap';
import {
    Link
  } from "react-router-dom";
import { CartContext } from '../contexts/Cart'  

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
          <Link to="/"  className="navbar-brand">MN Company</Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link className="nav-link" to="/products">Products</Link>
            </NavItem>
            <NavItem>
              <CartContext.Consumer>
                {({cartItems}) => <Link className="nav-link" to="/cart">Cart ({cartItems.length})</Link> }
              </CartContext.Consumer>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation