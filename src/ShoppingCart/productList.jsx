import React, { Component } from 'react'
import ProductItem from './productItem'

export default class ProductList extends Component {
    renderProductList = () => {
        // const { data } = ;

        const product = this.props.data.map((item) => {
            return (
                <div className="col-4 mb-4 p-3" key={item.id}>
                    <ProductItem getProduct={this.props.getProduct} data={item} addToCart={this.props.addToCart} />
                </div>
            )
        })
        return product;



    }
    render() {
        return (
            <div>
                <h1>Danh sách sản phẩm</h1>
                <div className="container">
                    <div className="row">
                        {this.renderProductList()}
                    </div>
                </div>
            </div>
        )
    }
}
