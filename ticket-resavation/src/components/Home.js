import React, {Component} from 'react';
import axios from 'axios/index';
import TrainItem from './TrainItem'
import '../App.css';

class Home extends Component{
    constructor(){
        super();
        this.state = {
            trains:[]
        }
    }

    componentWillMount() {
        this.showTrains();
    }

    showTrains(){
        axios.get('http://localhost:3000/api/trains')
            .then(
                response =>{
                    this.setState({trains: response.data},
                        () =>{
                        console.log(this.state);
                        })
                }
            )
    }

    render() {
        const trains = this.state.trains.map((train, i) =>{
            return(
                //<li className={"collection-item"}>{train.name}</li>

                <TrainItem key={train.id} item={train}/>
            )
        })
        return(
            <div>
                <h1>Train Schedules</h1>
                <ul className={"collection"}>
                    {trains}
                </ul>

            </div>
        )
    }
}

export default Home;