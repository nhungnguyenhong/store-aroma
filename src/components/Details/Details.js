import React, { Component } from "react";
import { ProductConsumer } from "./../../context";
import { NavLink } from "react-router-dom";
import "./Details.css";
export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {
            id,
            title,
            company,
            img,
            info,
            price,
            inCart
          } = value.detailProduct;
          return (
            <div className="Containerd">
              <div className="ImgContainerd">
                <img src={img} alt={title} className="Imgd" />
              </div>
              <div className="InfoContainer">
                <h1 className="Titled">{title}</h1>
                <h3>Made by: {company}</h3>
                <p>
                  <strong>Description: </strong>
                  {info}
                </p>
                <h2>Price: $ {price}</h2>
                <div className="BtnContainer">
                  <NavLink to="/shop">
                    <button className="BackButton">Back to Shop</button>
                  </NavLink>
                  <button
                    disabled={inCart ? true : false}
                    onClick={() => {
                      value.addToCart(id);
                      value.openModal(id);
                    }}
                    className={
                      inCart ? "CartBtnDisable" : "CartBtn"
                    }
                  >
                    {inCart ? <span>in Cart</span> : <span>ADD To CART</span>}
                  </button>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
