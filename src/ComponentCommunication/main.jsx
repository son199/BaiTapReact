import React, { Component } from 'react'
import Demo from './demo'

export default class Main extends Component {
    user = {
        name: "son",
        age: 22,
    }
    render() {
        return (
            <div>
                <Demo data={this.user} />
            </div>
        )
    }
}
