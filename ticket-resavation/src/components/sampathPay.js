import React, {Component} from 'react';
import ReactDOM from "react-dom";
import '../App.css';

class SampathPay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            points: this.props.points,
            email: this.props.email,
            discount: 0,
            subtot: 3000,
            tot:2700
        }
    }

    home = function (name, cardNumber, cvc, total, points) {
        console.log(name + "--" + cardNumber + "--" + cvc + "--" + total);
        var subTotal = parseFloat(this.state.subtot);
        var data = {
            "email": this.state.email,
            "name": name,
            "cardNumber": cardNumber,
            "cvc": cvc,
            "total": total,
            "subtotal": subTotal
        };
        // ReactDOM.render(<App name={this.state.name} points={newPoints} email={this.state.email}/>, document.getElementById('root'));
    }

    back() {
        // ReactDOM.render(<App name={this.state.name} points={this.state.points} email={this.state.email}/>, document.getElementById('root'));
    }

    render() {
        var total = JSON.stringify(this.props.total);
        return ( /* *Sampath payment interface */ <div className="container">
            <div>
                <button type="submit" onClick={() => {
                    this.back()
                }}>Back
                </button>
            </div>
            <div>
                <div >
                    <form>
                        <fieldset>
                            <legend>Samapth Bank</legend>
                            <div><label>Card Holder's Name</label> <input
                                placeholder="Name"
                                type="text"/></div>
                            <div><label>Card Number</label> <input
                                placeholder="Card Number" type="text"/></div>
                            <div ><label>CVC Number</label> <input
                                placeholder="CVC"
                                type="text"/></div>
                            <div><label><b>TOTAL: {this.props.total} LKR</b></label>
                            </div>
                            <div><label><b>DISCOUNT: {this.state.discount} LKR</b></label></div>
                            <div><label><b>SUBTOTAL: {this.state.subtot} LKR</b></label></div>
                            <button onClick={() => this.home(document.getElementById("name").value, document.getElementById("cardNumber").value, document.getElementById("cvc").value, total, document.getElementById("loyalpoints").value)}>Submit
                            </button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>)
    }
}
export default SampathPay;