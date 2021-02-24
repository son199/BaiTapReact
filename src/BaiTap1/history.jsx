import React, { Component } from 'react'

export default class History extends Component {
    render() {
        return (

            <h3>Lần {this.props.times}: {this.props.guessNumber}</h3>

        )
    }
}
