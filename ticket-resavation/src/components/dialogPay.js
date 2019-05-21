import React, {Component} from 'react';
import ReactDOM from "react-dom";
import '../App.css';

class DialogPay extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            discount: 300,
            subtot: 3000,
            total:2700
        }
    }

    render() {
        var total = JSON.stringify(this.props.total);
        return (
            <div>
                <div >
                    <form>
                        <fieldset>
                            <legend>Dialog</legend>
                            <div><label>Phone Number</label> <input
                                placeholder="Phone Number"
                                type="text"/></div>
                            <div><label>PIN</label> <input
                                placeholder="PIN" type="text"/></div>
                            <div><label><b>TOTAL: {this.props.total} LKR</b></label>
                            </div>
                            <div><label><b>DISCOUNT: {this.state.discount} LKR</b></label></div>
                            <div><label><b>SUBTOTAL: {this.state.subtot} LKR</b></label></div>
                            <button onClick={() => this.home(document.getElementById("phone").value, document.getElementById("pin").value, total, document.getElementById("loyalpoints").value)}>Submit
                            </button>
                        </fieldset>
                    </form>
                </div>
            </div>
        )
    }
}

export default DialogPay;