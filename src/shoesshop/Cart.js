import React, { Component } from "react";

export class Cart extends Component {
  render() {
    return (
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content model-cart">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Cart
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>ProductId</th>
                    <th>Product name</th>
                    <th>Product Image</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Total</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.cart.map((item) => (
                    <tr key={item.id}>
                      <td>{item.product.id}</td>
                      <td>{item.product.name}</td>
                      <td>
                        <img src={item.product.image} width={50} height={75} />
                      </td>
                      <td>
                        <button
                          onClick={() =>
                            this.props.handleQuantity(item.product.id, false)
                          }
                          className="btn btn-info"
                        >
                          -
                        </button>
                        {item.quantity}
                        <button
                          onClick={() =>
                            this.props.handleQuantity(item.product.id, true)
                          }
                          className="btn btn-info"
                        >
                          +
                        </button>
                      </td>
                      <td>${item.product.price.toLocaleString()}</td>
                      <td>
                        {(item.quantity * item.product.price).toLocaleString()}
                      </td>
                      <td>
                        <button
                          onClick={() => this.props.deleteCart(item.product.id)}
                          className="btn btn-danger"
                        >
                          X
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan={5}></td>
                    <td className="total">
                      <h5>Tổng tiền </h5>
                    </td>
                    <td>
                      {this.props.cart
                        .reduce((total, productCart, index) => {
                          return (total +=
                            productCart.quantity * productCart.product.price);
                        }, 0)
                        .toLocaleString()}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <div className="modal-footer">
              <button
                onClick={() => this.props.clearCart()}
                type="button"
                className="btn btn-secondary"
              >
                Clear Cart
              </button>
              <button type="button" className="btn btn-dark">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
