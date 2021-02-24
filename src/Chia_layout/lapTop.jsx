import React, { Component } from 'react'
import LapTopItem from './lapTopItem'

export default class LapTop extends Component {

    renderlapTop = () => {
        // const { laptop } = this.props;
        const laptop = this.props.laptop.map((item) => {
            return (
                <LapTopItem data={item} />
            )
        })
        return laptop;



    }
    render() {
        return (
            <section id="laptop" className="container-fluid pt-5 pb-5 bg-light text-dark">
                <h1 className="text-center">BEST LAPTOP</h1>
                <div className="row">
                    {this.renderlapTop()}
                </div>
            </section>

        )
    }
}
