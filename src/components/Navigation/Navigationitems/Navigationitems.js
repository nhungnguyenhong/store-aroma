import React from "react";
import Navigationitem from "./Navigationitem/Navigationitem";
import Cart from "../../../assets/img/shopping-cart.svg";
import "./Navigationitems.css";
const navigationItems = () => {
  return (
    <ul className="NavigationItems">
      
      <Navigationitem link="/shop" >
        Shop
      </Navigationitem>
      <Navigationitem link="/about">About</Navigationitem>
      <Navigationitem link="/cart" cart="cart">
        <img src={Cart} alt="cart" className="Cart"/>
      </Navigationitem>
    </ul>
  );
};

export default navigationItems;
