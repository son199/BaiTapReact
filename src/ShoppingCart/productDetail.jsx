import React, { Component } from 'react'

export default class ProductDetail extends Component {
    render() {
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-4">
                        {/* optional chaning */}
                        <h2>{this.selectedProduct?.name}</h2>
                        <img src={this.props.selectedProduct?.img} width={300} alt="product" />
                    </div>
                    <div className="col-8">
                        <h2>Thông số kỹ thuật</h2>
                        <table className="table">
                            <tbody>
                                <tr>
                                    <td>Màn hình</td>
                                    <td>{this.props.selectedProduct?.screen}</td>
                                </tr>
                                <tr>
                                    <td> Giá</td>
                                    <td>{this.props.selectedProduct?.price}</td>
                                </tr>
                                <tr>
                                    <td>Camera trước</td>
                                    <td>{this.props.selectedProduct?.backCamera}</td>
                                </tr>
                                <tr>
                                    <td>Camera sau</td>
                                    <td>{this.props.selectedProduct?.frontCamera}</td>

                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
