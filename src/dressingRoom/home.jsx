import React, { Component } from 'react'
import Category from './category'
import ProductList from './productList'
import Model from './model'

export default class Home extends Component {
    render() {
        return (
            <div className="container-fluid ">
                <h1 className="display-4 text-center">Dressing Room</h1>
                <div className="row">

                    <div className="col-7">
                        <Category />
                        <ProductList />
                    </div>
                    <div className="col-5">
                        <Model />
                    </div>
                </div>
            </div>
        )
    }
}
