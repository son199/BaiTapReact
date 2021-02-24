import React, { Component } from 'react'
import ProductItem from './productItem'

export default class ProductList extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-4">
                        <ProductItem />
                    </div>
                    <div className="col-4">
                        <ProductItem />
                    </div>
                    <div className="col-4">
                        <ProductItem />
                    </div>
                </div>
            </div>
        )
    }
}
