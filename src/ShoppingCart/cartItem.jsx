import React, { Component } from 'react'

export default class CartItem extends Component {
    handleRemove = () => {
        this.props.removeCartItem(this.props.data)

    }
    handleQuantityDown = () => {
        this.props.decreaseQuantity(this.props.data);
    }
    handleQuantityUp = () => {
        this.props.tangQuantity(this.props.data);
    }
    render() {
        return (
            <tr>
                <td>
                    <img src={this.props.data.product.img} width={50} height={50} alt="img" />
                </td>
                <td>{this.props.data.product.name}</td>
                <td>
                    <button className="btn btn-outline-primary" onClick={this.handleQuantityDown}>-</button>
                    <span className="mx-2">{this.props.data.quantity}</span>
                    <button className="btn btn-outline-primary" onClick={this.handleQuantityUp}>+</button>

                </td>
                <td>{this.props.data.product.price} $</td>
                <td>
                    <button className="btn btn-danger" onClick={this.handleRemove}>Xoá</button>
                </td>
            </tr>
        )
    }
}
