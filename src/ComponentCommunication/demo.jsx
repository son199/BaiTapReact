import React, { Component } from 'react'

export default class Demo extends Component {
    render() {
        const { data } = this.props;
        return (
            <div>
                dfsdfsdfsdfsd
                <p>User name :{data.name} </p>
                <p>User age :{data.age} </p>

            </div>
        )
    }
}
