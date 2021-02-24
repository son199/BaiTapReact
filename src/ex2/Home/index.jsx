import React, { Component } from 'react'
import Header from '../Header';
import Carousel from '../Carousel';
import Content from '../Content';
import Footer from '../Footer';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <Carousel />
                <Content />
                <Footer />
            </div>
        )
    }
}
