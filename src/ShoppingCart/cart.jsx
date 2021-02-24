import React, { Component } from 'react'
import CartItem from './cartItem'

export default class Cart extends Component {

    renderCartItem = () => {
        const cartItemUI = this.props.cart.map(cart => {
            return (
                <CartItem data={cart} key={cart.product.id} removeCartItem={this.props.removeCartItem} decreaseQuantity={this.props.decreaseQuantity} tangQuantity={this.props.tangQuantity} />
            )
        })
        return cartItemUI;

    }
    render() {
        return (
            <div className="container">

                <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                    <div style={{ maxWidth: "80%" }} className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">CART</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <table className="table">
                                    <tbody>
                                        {this.renderCartItem()}
                                        <tr>
                                            <td colSpan="100%">
                                                Tổng tiền {this.props.totalAmount} $

                                            </td>
                                        </tr>
                                    </tbody>

                                </table>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Đóng</button>
                                <button type="button" className="btn btn-primary" onClick={this.props.payCart}>Thanh Toán</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div >

        )
    }
}
