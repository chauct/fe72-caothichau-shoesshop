import React, { Component } from "react";

export class ProductDetail extends Component {
  render() {
    const { name, image, price, description, quantity } =
      this.props.selectedProduct;
    return (
      <div
        className="modal fade"
        id="modelDetail"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Product Detail
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body model-detail">
              <div className="row">
                <div className="col-4">
                  <h1 className="title-left">{name}</h1>
                  <img src={image} className="w-100" />
                </div>
                <div className="col-8">
                  <h1 className="title-right">Thông tin </h1>
                  <div className="info">
                    <p>Name: {name}</p>
                    <p>Price: {price}</p>
                    <p>Description: {description}</p>
                    <p>Stock: {quantity}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDetail;
