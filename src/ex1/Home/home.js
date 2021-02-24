import React, { Component } from 'react'
import Header from "../Header/header";
import Content from "../Content/content";
import Sidebar from "../Sidebar/sidebar";
import Footer from "../Footer/footer";
import "./home.css";
export default class home extends Component {
    render() {
        return (
            <div>
                {/* <Header /> */}
                <div className="container">
                    <Content />
                    <Sidebar />
                </div>
                <Footer />
            </div>
        )
    }
}
