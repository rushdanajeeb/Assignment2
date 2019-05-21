import React, { Component } from "react";
import ReactDOM from "react-dom";
import ViewDetails from "./viewDetails";
import DialogPay from "./dialogPay";
import SampathPay from "./sampathPay";

class MakePayment extends Component {

    dialogpay = function (e) {
        ReactDOM.render(<DialogPay />, document.getElementById('root'));
    };

    sampathpay = function (e) {
        ReactDOM.render(<SampathPay />, document.getElementById('root'));
    };

    render() {
        return (
            <div className={"trainBooking"}>
                <div className={"a"}> Enter Payment method<br/><br/>
                    <table>
                        <td>
                            <tr>
                                <input type={"radio"} id={"mobile"}  onClick={() => this.dialogpay()}/>Mobile Pay
                                <input type={"radio"} id={"sampath"} onClick={() => this.sampathpay()}/>Sampath Pay
                            </tr>
                            <br/><br/>
                            {/*<tr><button >Next</button></tr>*/}
                        </td>
                    </table>
                </div>
            </div>
        );
    }
}


export default MakePayment;