import React, { Component } from "react";
import Title from "./../Title/Title";
import EmptyCart from "./EmptyCart/EmptyCart";
import CartList from "./CartList/CartList";
import CartTotal from './CartTotal/CartTotal'
import classes from "./Cart.css";
import { ProductConsumer } from "./../../context";
export default class Cart extends Component {
  render() {
    return (
      <div>
        <ProductConsumer>
          {value => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <div className={classes.Container}>
                  <Title name="Your Cart" />
                  <CartList value={value} />
                  <CartTotal value={value}/>
                </div>
              );
            } else {
              return <EmptyCart />;
            }
          }}
        </ProductConsumer>
      </div>
    );
  }
}
