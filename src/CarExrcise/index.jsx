import React, { Component } from 'react'
import redCar from "../assets/img/products/red-car.jpg"
import blackCar from "../assets/img/products/black-car.jpg"
import silverCar from "../assets/img/products/silver-car.jpg"
import steelCar from "../assets/img/products/steel-car.jpg"








// import iconBlack from "../assets/img/icons/icon-black.jpg"
// import iconRed from "../assets/img/icons/icon-red.jpg"
// import iconSilver from "../assets/img/icons/icon-silver.jpg"
// import iconBlack from "../assets/img/icons/icon-steel.jpg"

import iconBlack from "../assets/img/icons/icon-black.jpg"
import iconRed from "../assets/img/icons/icon-red.jpg"
import iconSilver from "../assets/img/icons/icon-silver.jpg"
import iconSteel from "../assets/img/icons/icon-steel.jpg"



export default class CarExercise extends Component {


    state = {
        carImage: redCar,
    }

    changeCarImg = (carImage) => () => {
        // closure là 1 func return về 1 func con
        // setSate để thay đổi hình ảnh
        // có 2 tham số tham số 2 là 1 function
        this.setState({
            carImage: carImage,
        }, () => {
            console.log(this.state.carImage);
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <img className="w-100" src={this.state.carImage} alt="car" />
                    </div>
                    <div className="col-6">
                        <img src={iconBlack} onClick={this.changeCarImg(blackCar)} className="w-25" alt="color button" />
                        <img src={iconRed} onClick={this.changeCarImg(redCar)} className="w-25" alt="color button" />
                        <img src={iconSilver} onClick={this.changeCarImg(silverCar)} className="w-25" alt="color button" />
                        <img src={iconSteel} onClick={this.changeCarImg(steelCar)} className="w-25" alt="color button" />

                    </div>


                </div>


            </div>
        )
    }
}
