import React, { Component } from 'react'
import History from './history';

export default class BaiTap1 extends Component {
    state = {
        numberGuess: "",
        message: "",
        secretNumber: Math.round(Math.random() * 100),
        history: [],
    }

    handleGuess = (e) => {
        this.setState({
            numberGuess: e.target.value,
        });

    }

    getLastElementHistory = () => {
        return this.state.history.slice(-1).pop()
    }

    refactorHistory = () => {
        if (this.state.history.length > 0) {
            let check = this.getLastElementHistory();
            if (check === this.state.numberGuess) return [...this.state.history];
        } return [...this.state.history, this.state.numberGuess];
    }

    clearInputField = () => {
        return document.getElementById("inputForm").value = "";
    }

    handleCheck = () => {
        this.state.numberGuess > this.state.secretNumber ? this.setState({
            message: "Số nhâpj vào lớn hơn",
            history: this.refactorHistory(),
        }) :
            this.state.numberGuess < this.state.secretNumber ? this.setState({
                message: "Số nhập vào nhỏ hơn",
                history: this.refactorHistory(),
            }) :
                this.setState({
                    message: "Chúc mừng bạn đã chọn đúng !!!!",
                    history: this.refactorHistory(),
                });
        this.clearInputField();
        console.log(this.state.secretNumber);
    }

    renderHistory = () => {
        console.log(this.state.history);
        const renderHistoryHTML = this.state.history.map((history, index) => {
            return (
                <History key={index} times={index + 1} guessNumber={history} />
            )
        })
        return renderHistoryHTML;
    }

    disableButton = () => {
        return parseInt(this.getLastElementHistory()) === this.state.secretNumber;
    }

    render() {

        return (
            <div className="text-left p-5">
                <input type="text" placeholder="Mời nhập số vào!!!" className="p-2 border border-dark rounded"
                    onChange={(e) => { this.handleGuess(e) }} id="inputForm" />
                <button className="btn btn-success ml-2 p-2 " onClick={this.handleCheck} disabled={!this.state.numberGuess || this.disableButton()}> Đoán</button>
                <h1>{this.state.message}</h1>
                <div className="border pl-2">
                    {this.disableButton() ?
                        <div>
                            <h2>Lịch sử</h2>
                            <div>{this.renderHistory()}</div>
                        </div> : null
                    }
                </div>
            </div>
        )
    }
}
