import React, { Component } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import "../App.css";
import ReactDOM from "react-dom";
import Home from "./Home";
import MakePayment from "./makePayment";
import FormLabel from "react-bootstrap/FormLabel";

class ViewDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "perera@gmail.com",
            name: "train1",
            noOfTickects:"3",
            NIC:"9753676543V",
            class:"1st",
            time:"11.50"
        };
    }

    back = function (e) {
        ReactDOM.render(<Home />, document.getElementById('root'));
    };

    next = function (e) {
        ReactDOM.render(<MakePayment />, document.getElementById('root'));
    };

    validateForm() {
        return this.state.email.length > 0 && this.state.name.length > 0 && this.state.name.length < 50 && this.state.noOfTickects !== 0 && this.state.NIC.length > 0 && this.state.NIC.length < 10;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
    }

    render() {
        return (
            <div className="View">
                <form onSubmit={() => this.next()}>
                    <table>
                        <td>
                            <tr>selected train:</tr>
                            <br/>
                            <tr>selected class:</tr>
                            <br/>
                            <tr>number of tickets:</tr>
                            <br/>
                            <tr>selected time:</tr>
                            <br/>
                            <tr>name:</tr>
                            <br/>
                            <tr>email:</tr>
                            <br/>
                            <tr>NIC:</tr>
                            <br/>
                            <Button block bsSize="large" type="submit" onClick={() => this.back()}>Back</Button>
                        </td>

                        <td>
                            <tr><input value={this.state.name} onChange={this.handleChange} type="text"/></tr>
                            <br/>
                            <tr><input value={this.state.class} onChange={this.handleChange} type="text"/></tr>
                            <br/>
                            <tr><input value={this.state.noOfTickects} onChange={this.handleChange} type="number"/></tr>
                            <br/>
                            <tr><input value={this.state.time} onChange={this.handleChange} type="datetime"/></tr>
                            <br/>
                            <tr><input onChange={this.handleChange} type="text"/></tr>
                            <br/>
                            <tr><input onChange={this.handleChange} type="text"/></tr>
                            <br/>
                            <tr><input onChange={this.handleChange} type="text"/></tr>
                            <br/>
                            <Button block bsSize="large" enable={this.validateForm()} onClick={() => this.next()} type="submit">Proceed Payment</Button>
                        </td>
                    </table>
                </form>
            </div>
        );
    }
}

export default ViewDetails;