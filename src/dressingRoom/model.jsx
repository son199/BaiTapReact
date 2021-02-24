import React, { Component } from 'react'
import './style.css';
export default class Model extends Component {
    render() {
        return (
            <div className="contain" style={{
                backgroundImage: 'url("./images/background/background_998.jpg")',
            }}>
                <div className="body" style={{
                    backgroundImage: 'url("./images/allbody/bodynew.png")',
                }}>
                </div>
                <div className="model" style={{
                    backgroundImage: 'url("./images/model/1000new.png")',
                }}>>
                </div>
                <div className="bikinitop" style={{
                    backgroundImage: 'url("./images/allbody/bikini_branew.png")',
                }}>>
                </div>
                <div className="bikinibottom" style={{
                    backgroundImage: 'url("./images/allbody/bikini_pantsnew.png")',
                }}>>
                </div>
                <div className="feetleft" style={{
                    backgroundImage: 'url("./images/allbody/feet_high_leftnew.png")',
                }}>>
                </div>
                <div className="feetright" style={{
                    backgroundImage: 'url("./images/allbody/feet_high_rightnew.png")',
                }}>>
                </div>
            </div>
        )
    }
}
