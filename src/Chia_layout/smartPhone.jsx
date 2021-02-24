import React, { Component } from 'react'
import SmartPhoneItem from './smartPhoneItem'

export default class SmartPhone extends Component {
    renderSmartPhone = () => {
        // const { laptop } = this.props;
        const smartPhone = this.props.smartPhone.map((item) => {
            return (
                <SmartPhoneItem data={item} />
            )
        })
        return smartPhone;



    }
    render() {
        return (
            <section id="smartphone" className="container-fluid pt-5 pb-5">
                <h1 className="text-white text-center">BEST SMARTPHONE</h1>
                <div className="row">
                    {this.renderSmartPhone()}
                </div>
            </section>

        )
    }
}
