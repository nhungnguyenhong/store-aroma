import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigationitem.css";

const navigationItem = props => {

  return (
    <li className= {props.cart !=="cart" ? "NavigationItem":"CartItem"} onClick={props.click}>
      <NavLink to={props.link} exact={props.exact}>
        {props.children}
      </NavLink>
    </li>
  );
};

export default navigationItem;
