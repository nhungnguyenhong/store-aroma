import React, { Component } from "react";
import { ProductConsumer } from "./../../context";
import BackDrop from "./../Backdrop/Backdrop";
import "./Modal.css";
import { NavLink } from "react-router-dom";
export default class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { modalOpen, closeModal } = value;
          const { img, title, price } = value.modalProduct;
          if (!modalOpen) {
            return null;
          } else {
            return (
              <div>
                <BackDrop click={closeModal} />
                <div className="ContainerM">
                <div className="ImgContainerM">
                    <img src={img} alt={title} className="ImgM"/>
                </div>
                 <h3 >{title}</h3>
                 <h3>Price:${price}</h3>
                 <div className="BtnContainerM">
                   <NavLink to="/shop">
                     <button className="BackButtonM" onClick={closeModal}>Back to Shop</button>
                   </NavLink>
                   <NavLink to="/Cart">
                     <button className="CartBtnM" onClick={closeModal}>Go to Cart</button>
                   </NavLink>
                 </div>
                </div>
              </div>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}
