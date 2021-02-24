import React, { Component } from 'react'
import Header from './header'
import Carousel from './carousel'
import SmartPhone from './smartPhone'
import LapTop from './lapTop'
import Promotion from './promotion'

export default class Home extends Component {
    laptop = [
        {
            id: 1,
            name: 'MACBOOK',
            img: './img/lt_macbook.png',
            des: 'The MacBook is a brand of notebook computers manufactured by Apple Inc',
        },
        {
            id: 2,
            name: 'ASUS ROG',
            img: './img/lt_rog.png',
            des: 'the Asus ROG Strix Flare is the latest addition to Asus lineup of ROG branded devices',
        },
        {
            id: 3,
            name: 'HP OMEN',
            img: './img/lt_hp.png',
            des: 'A young global smartphone brand focusing on introducing perfect sound quality',
        },
        {
            id: 4,
            name: 'LENOVO THINKPAD',
            img: './img/lt_lenovo.png',
            des: 'The ThinkPad X1 Carbon is a high-end notebook computer released by Lenovo in 2012',
        },
    ];
    smartPhone = [
        {
            id: 1,
            name: 'iPhone X',
            img: './img/sp_iphoneX.png',
            des: 'iPhone X features a new all-screen design. Face ID, which makes your face your password',
        },
        {
            id: 2,
            name: 'Galaxy Note7',
            img: '/img/sp_note7.png',
            des: 'The Galaxy Note7 comes with a perfectly symmetrical design for good reason',
        },
        {
            id: 3,
            name: 'ViVo',
            img: './img/sp_vivo850.png',
            des: 'A young global smartphone brand focusing on introducing perfect sound quality',
        },
        {
            id: 4,
            name: 'Blackberry',
            img: './img/sp_blackberry.png',
            des: 'BlackBerry is a line of smartphones, tablets, and services originally designed',
        },
    ];
    render() {
        return (
            <div className="bg-dark">
                <Header />
                <Carousel />
                <SmartPhone smartPhone={this.smartPhone} />
                <LapTop laptop={this.laptop} />
                <Promotion />
            </div>
        )
    }
}
