import React, { Component } from "react";
import { storeProducts, detailProduct } from "./data";
const ProductContext = React.createContext();


class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: detailProduct,
    cart: [],
    modalOpen: false,
    modalProduct: detailProduct,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0
  };
  componentDidMount() {
    this.setProduct();
  }

  
  setProduct = () => {  // 商品をとる
    let products = [];
    storeProducts.forEach(item => {
      const singleItem = { ...item };
      products = [...products, singleItem]; //プロダクトのリスト
    });
    this.setState(() => {
      return { products };
    });
  };
  
  
  getItem = id => { //IDによってプロダクトをとる
    const product = this.state.products.find(item => item.id === id);
    return product;
  };


  addToCart = id => { //カートにプロダクトを追加する
    let tempProduct = [...this.state.products];
    const index = tempProduct.indexOf(this.getItem(id));
    const product = tempProduct[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    this.setState(
      () => {
        return { products: tempProduct, cart: [...this.state.cart, product] };
      },
      () => {
        this.addTotals();
      }
    );
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          // day la dong handleDetail
          addToCart: this.addToCart,
          // day la dong openModal/closeModal
          // dong tang/ giam so luwong sp trong cart
          //xoa sp, xoa toan bo gio hang
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}


const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
