
import React from "react";
// class components
import './header.css';

export class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <h1>
                    Header
            </h1>
                <nav>
                    <a href="">Home</a>
                    <a>product</a>
                </nav>
            </div>
        )
    }
}
