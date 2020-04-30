import React from 'react';

export const CartContext = React.createContext();

export class CartProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cartItems: []
        }

        this.addProductToCart = this.addProductToCart.bind(this);
    }

    addProductToCart(product) {
        this.setState({
            cartItems: this.state.cartItems.concat(product)
        })
    }

    render() {
        return(
            <CartContext.Provider value={{
                cartItems: this.state.cartItems,
                addProductToCart: this.addProductToCart
            }}>
                {this.props.children}
            </CartContext.Provider>
        )
    }
} 