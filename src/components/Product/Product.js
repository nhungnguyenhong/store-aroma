import React, { Component } from "react";
import "./Product.css";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { ProductConsumer } from "./../../context";
export default class Product extends Component {
  render() {

    const { id, 
            title, 
            img, 
            price, 
            inCart } = this.props.product;

    return (
      // コンテキストファイルから送信されるプロパティとメソッドを使用する
      <ProductConsumer> 
        {value=>(
        
          <div className="Card">
            <NavLink to="/Detail">
              <div
                className="ImgContainer"
                onClick={() => value.handleDetail(id)} // 商品の詳細を表示する
              >
                <img src={img} alt={title} className="img-product-list" />
              </div>
        
              <h4 className="title-product">{title}</h4>
            </NavLink>

            <span className="Price">$ {price}</span>
            <button
              disabled={inCart ? true : false}
              onClick={() => {
                value.addToCart(id); //カートに商品を追加
                value.openModal(id); // 商品の小さなウィンドウを開きます
              }}

              className={inCart ? "CartBtnDisable" : "CartBtn"}
            >
              {inCart ? <span>in Cart</span> : <span>ADD To CART</span>}
            </button>
          </div>
        )}
      </ProductConsumer>
       
    );
  }
}

Product.propTypes ={ //コンポーネントが受け入れるプロパティのデータ型を確認します
  product:PropTypes.shape({
    id:PropTypes.number,
    img:PropTypes.string,
    title:PropTypes.string,
    price:PropTypes.number,
    inCart:PropTypes.bool
  }).isRequired
}