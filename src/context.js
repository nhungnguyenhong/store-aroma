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
  increment = id => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count = product.count + 1;
    product.total = parseFloat((product.count * product.price).toFixed(2));
    this.setState(
      () => {
        return { cart: [...tempCart] };
      },
      () => {
        this.addTotals();
      }
    );
  };
  decrement = id => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count = product.count - 1;
    if (product.count === 0) {
      this.removeItem(id);
    }else{

      product.total = parseFloat((product.count * product.price).toFixed(2));
      this.setState(
        () => {
          return { cart: [...tempCart] };
        },
        () => {
          this.addTotals();
        }
      );
    }
  };
  removeItem = id => {
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];
    tempCart = tempCart.filter(item => item.id !== id);
    const index = tempProducts.indexOf(this.getItem(id));
    let removeProduct = tempProducts[index];
    removeProduct.inCart = false;
    removeProduct.count = 0;
    removeProduct.total = 0;
    this.setState(
      () => {
        return {
          cart: [...tempCart],
          product: [...tempProducts]
        };
      },
      () => {
        this.addTotals();
      }
    );
  };
  addTotals = () => {
    let subTotal = 0;
    this.state.cart.map(item => (subTotal += item.total));
    const tempTax = subTotal * 0.15;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = parseFloat((subTotal + tax).toFixed(2));
    subTotal = parseFloat(subTotal.toFixed(2));
    this.setState(() => {
      return { cartSubTotal: subTotal, cartTax: tax, cartTotal: total };
    });
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          // day la dong handleDetail
          addToCart: this.addToCart,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}


const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
