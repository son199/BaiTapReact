import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand navbar-light bg-light">
                <div className="nav navbar-nav">
                    <a className="nav-item nav-link active" href="">Home <span className="sr-only">(current)</span></a>
                    <a data-toggle="modal" data-target="#modelId" className="nav-item nav-link" href="">Cart({this.props.totalItems})</a>
                </div>
            </nav>

        )
    }
}
