import React, { Component } from 'react'

export default class ProductItem extends Component {
    state = {
        //  ẩn hiện 1 phần tử
        isShowDes: true,
    };
    // viết 1 func showDes
    // showDescription = () => {
    //     if (this.state.isShowDes) {
    //         return (
    //             <p>{this.props.data.desc}</p>

    //         )
    //     }
    //     return null;

    // }

    toggleDescription = () => {
        this.setState({
            isShowDes: !this.state.isShowDes,
        })
    }
    // add to cart
    buyProduct = () => {
        this.props.addToCart(this.props.data);
    }
    // showdetails 
    showDetails = () => {
        this.props.getProduct(this.props.data);

    }
    // tất cả component không share dử liệu cho nhau
    render() {
        return (
            <div className="card">
                <img src={this.props.data.img} alt="product" />
                <h3>{this.props.data.name}</h3>
                {/* {this.showDescription()} */}
                {this.state.isShowDes ? <p>{this.props.data.desc}</p> : null}
                <div className="d-flex justify-content-center">
                    <button className="btn btn-primary mr-2" onClick={this.showDetails}>Xem chi tiết</button>
                    <button className="btn btn-info mr-2" onClick={this.toggleDescription}>Ẩn mô tả</button>
                    <button className="btn btn-success mr-2" onClick={this.buyProduct
                    }>Mua</button>
                </div>
            </div>
        )
    }
}
