import React from "react";
import CartItem from "./../CartItem/CartItem";
import CartColumns from "./../CartColumns/CartCoulmns";
import  "./CartList.css";
const CartList = ({ value }) => {
  const { cart } = value;
  return (
    
      <div className="TabelContainer">
        <table className="CartTable">
          <CartColumns />
          {cart.map(item => {
            return <CartItem key={item.id} item={item} value={value} />;
          })}
        </table>
        <br></br>
        <hr width="90%"></hr>
      </div>
    
  );
};

export default CartList;
