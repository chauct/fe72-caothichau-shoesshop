import React, { Component } from "react";
import ProductList from "./ProductList";
import ProductDetail from "./ProductDetail";
import Cart from "./Cart";

import styles from "../assets/css/styles.css";

export class Home extends Component {
  products = [
    {
      id: 1,
      name: "Adidas Prophere",
      alias: "adidas-prophere",
      price: 350,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.",
      quantity: 995,
      image: "http://svcy3.myclass.vn/images/adidas-prophere.png",
    },
    {
      id: 2,
      name: "Adidas Prophere Black White",
      alias: "adidas-prophere-black-white",
      price: 450,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.",
      quantity: 990,
      image: "http://svcy3.myclass.vn/images/adidas-prophere-black-white.png",
    },
    {
      id: 3,
      name: "Adidas Prophere Customize",
      alias: "adidas-prophere-customize",
      price: 375,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.",
      quantity: 415,
      image: "http://svcy3.myclass.vn/images/adidas-prophere-customize.png",
    },
    {
      id: 4,
      name: "Adidas Super Star Red",
      alias: "adidas-super-star-red",
      price: 465,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.",
      quantity: 542,
      image: "http://svcy3.myclass.vn/images/adidas-super-star-red.png",
    },
    {
      id: 5,
      name: "Adidas Swift Run",
      alias: "adidas-swift-run",
      price: 550,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.",
      quantity: 674,
      image: "http://svcy3.myclass.vn/images/adidas-swift-run.png",
    },
    {
      id: 6,
      name: "Adidas Tenisky Super Star",
      alias: "adidas-tenisky-super-star",
      price: 250,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.",
      quantity: 456,
      image: "http://svcy3.myclass.vn/images/adidas-tenisky-super-star.png",
    },
    {
      id: 7,
      name: "Adidas Ultraboost 4",
      alias: "adidas-ultraboost-4",
      price: 450,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.",
      quantity: 854,
      image: "http://svcy3.myclass.vn/images/adidas-ultraboost-4.png",
    },
    {
      id: 8,
      name: "Adidas Yeezy 350",
      alias: "adidas-yeezy-350",
      price: 750,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.",
      quantity: 524,
      image: "http://svcy3.myclass.vn/images/adidas-yeezy-350.png",
    },
    {
      id: 9,
      name: "Nike Adapt BB",
      alias: "nike-adapt-bb",
      price: 630,
      description:
        "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.",
      shortDescription: "Paul George is the rare high-percentage shooter",
      quantity: 599,
      image: "http://svcy3.myclass.vn/images/nike-adapt-bb.png",
    },
    {
      id: 10,
      name: "Nike Air Max 97",
      alias: "nike-air-max-97",
      price: 650,
      description:
        "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.",
      shortDescription: "Paul George is the rare high-percentage shooter",
      quantity: 984,
      image: "http://svcy3.myclass.vn/images/nike-air-max-97.png",
    },
    {
      id: 11,
      name: "Nike Air Max 97 Blue",
      alias: "nike-air-max-97-blue",
      price: 450,
      description:
        "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.",
      shortDescription: "Paul George is the rare high-percentage shooter",
      quantity: 875,
      image: "http://svcy3.myclass.vn/images/nike-air-max-97-blue.png",
    },
    {
      id: 12,
      name: "Nike Air Max 270 React",
      alias: "nike-air-max-270-react",
      price: 750,
      description:
        "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.",
      shortDescription: "Paul George is the rare high-percentage shooter",
      quantity: 445,
      image: "http://svcy3.myclass.vn/images/nike-air-max-270-react.png",
    },
  ];

  state = {
    objItem: {},
    selectedProduct: null,
    cart: [],
  };

  clearCart = () => {
    this.setState({
      cart: [],
    });
  };

  selectProduct = (prodFromItem) => {
    this.setState({
      selectedProduct: prodFromItem,
    });
  };

  handleQuantity = (idProd, isIncrease) => {
    const cloneCart = [...this.state.cart];
    const foundItem = cloneCart.findIndex((item) => item.product.id === idProd);
    if (isIncrease) {
      cloneCart[foundItem].quantity += 1;
    } else {
      if (cloneCart[foundItem].quantity > 1) {
        cloneCart[foundItem].quantity -= 1;
      }
    }
    // cập nhật lại giỏ hàng
    this.setState({
      cart: cloneCart,
    });
  };

  deleteCart = (idProd) => {
    // tìm sp trong giỏ hàng khi click
    const cloneCart = [...this.state.cart];

    const foundItem = cloneCart.find((item) => item.product.id === idProd);
    if (foundItem) {
      cloneCart.splice(foundItem, 1);
    }
    // cập nhật lại giỏ hàng
    this.setState({
      cart: cloneCart,
    });
  };

  addToCart = (prod) => {
    // spead operator
    const cloneCart = [...this.state.cart];

    const foundItem = cloneCart.find((item) => item.product.id === prod.id);
    if (foundItem) {
      // tăng quantity
      foundItem.quantity += 1;
    } else {
      // thêm mới sp với quantity là 1
      const cartItem = {
        product: prod,
        quantity: 1,
      };
      cloneCart.push(cartItem);
    }
    this.setState(
      {
        cart: cloneCart,
      },
      () => {
        console.log(this.state.cart);
      }
    );
  };

  render() {
    let tongSoLuong = this.state.cart.reduce((tongSoLuong, item, index) => {
      return (tongSoLuong += item.quantity);
    }, 0);
    return (
      <div className="wrapper">
        <div className="container ">
          <div className="header row">
            <h1 className="title">Shoes Shop</h1>
            <p
              type="button"
              class=" text-right offset-4 col-4"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Cart ({tongSoLuong})
            </p>
          </div>

          <ProductList
            addToCart={this.addToCart}
            selectProduct={this.selectProduct}
            products={this.products}
          />

          {this.state.selectedProduct && (
            <ProductDetail selectedProduct={this.state.selectedProduct} />
          )}
          <Cart
            clearCart={this.clearCart}
            handleQuantity={this.handleQuantity}
            deleteCart={this.deleteCart}
            cart={this.state.cart}
          />
        </div>
      </div>
    );
  }
}

export default Home;
