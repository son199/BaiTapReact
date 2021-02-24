import React, { Component } from 'react'

export default class Databinding extends Component {
    state = {
        // state là 1 object
        isFine: true,
    }

    // dựa vào 1 biến để ẩn hiện giao diện

    displayDestination = () => {
        if (this.state.isFine) {
            return <p>Cybersoft</p>
        }

        return <p>Cybercore</p>
    }
    decideDestination = (isFine) => {
        return () => {
            this.setState({
                isFine: isFine,
            })
            console.log(this.state.isFine);
        }



    }

    address = "82 Ung van Khiem , Binh Thanh";
    showMessage() {
        alert("Hello");
    }
    //  sự khác biêt của 2 loại function là arown function là không có con trỏ this
    // hight order function vd nhu ham map .... là func có chứa 1 func bên trong
    showMessageWidthThis = () => {
        alert(this.address);
    }
    // closure là 1 func return về 1 func khác

    //  vấn đề cần nhớ
    // luôn dùng arrow func
    // 1 hàm có ham số thì dùng closure func
    showMessageWidthParams = (message) => {
        return () => {
            alert(message)
        }
    }
    render() {
        const lecture = "Dang Trung Hieu";
        return (
            <div>

                <button onClick={this.decideDestination(true)}>Fine</button>
                <button onClick={this.decideDestination(false)}>Sick</button>
                {this.displayDestination()}
                {/* <h1>Cyber Soft</h1>
                <p>{this.address}</p>
                <p>{lecture}</p> */}
                {/* gọi onlick gọi hàm thì chir gọi lại tên hàm đó k có dấu () */}
                {/* <button onClick={this.showMessage}>Show Message</button>
                <button onClick={this.showMessageWidthThis}>Show Message Width This</button>
                <button onClick={this.showMessageWidthParams("hello")}>Show Message Width Params</button> */}

            </div>
        )
    }
}
