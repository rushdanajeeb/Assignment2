import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../App.css';
import ReactDOM from "react-dom";
import ViewDetails from './viewDetails';

class TrainItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: props.item
        }
    }

    booking = function (e) {
        ReactDOM.render(<ViewDetails />, document.getElementById('root'));
    };

    render() {
        return (
            <li className={"collection-item"}>
                <table>
                    <th><Link to={`/trains/${this.state.item.id}`}>{this.state.item.name}</Link></th>

                    <td>
                        <tr>
                            <Link to={`/trains/${this.state.item.id}`}>{this.state.item.class}</Link></tr>
                        <tr>
                            <Link to={`/trains/${this.state.item.id}`}>{this.state.item.availableSeats}</Link>
                        </tr>
                        <tr>
                            <Link to={`/trains/${this.state.item.id}`}>{this.state.item.time}</Link>
                        </tr>
                        <tr>
                            <Link to={`/trains/${this.state.item.id}`}>{this.state.item.startStation}</Link>
                        </tr>
                        <tr>
                            <Link to={`/trains/${this.state.item.id}`}>{this.state.item.endStation}</Link>
                        </tr>
                    </td>

                    <td>
                        <tr><button onClick={() => this.booking()}>Book ticket</button></tr>
                    </td>

                </table>


            </li>


        )
    }
}

export default TrainItem;