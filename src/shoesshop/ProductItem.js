import React, { Component } from "react";

export class ProductItem extends Component {
  render() {
    const { name, price, image } = this.props.prod;
    return (
      <div className="card">
        <img src={image} className=" w-100 d-block" width={200} height={300} />
        <h3>{name}</h3>
        <h5>${price}</h5>
        <div>
          <button
            onClick={() => this.props.selectProduct(this.props.prod)}
            className="btn btn-dark me-4"
            data-bs-toggle="modal"
            data-bs-target="#modelDetail"
          >
            Detail
          </button>
          <button
            onClick={() => this.props.addToCart(this.props.prod)}
            className="btn btn-danger"
          >
            Add To Cart
          </button>
        </div>
      </div>
    );
  }
}

export default ProductItem;
