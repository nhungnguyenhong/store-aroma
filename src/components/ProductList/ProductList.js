import React, { Component } from "react";
import Title from "./../Title/Title";
import Product from "../Product/Product";
import "./ProductList.css";
import { ProductConsumer } from "./../../context";
export default class ProductList extends Component {

  render() {
    return (
      <div className="PageContainer">
        <Title name="Suitcase" />
        <div className ="ProductContainer">

          <ProductConsumer>
            {(value)=>{
                return value.products.map(product=>(
                    <Product key={product.id}
                             product={product}/>
                ))
            }}
          </ProductConsumer>

        </div>
      </div>
    );
  }
}
