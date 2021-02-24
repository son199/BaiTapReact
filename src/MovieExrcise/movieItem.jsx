import React, { Component } from 'react'

export default class MovieItem extends Component {
    render() {
        const { data } = this.props
        return (

            <div className="card">
                <img src={data.hinhAnh} alt="" />
                <h4>{data.tenPhim}</h4>
                <p>{data.moTa.slice(1, 100)}</p>
            </div>

        )
    }
}
