import React,{Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class TrainDetails extends Component{
    constructor(props){
        super(props);
        this.state = {
            details:''
        }
    }

    componentWillMount() {
        this.showTrainsById();
    }

    showTrainsById(){
        let trainId = this.props.match.params.id;
        axios.get('http://localhost:3000/api/train/${trainId}')
            .then(response =>{
                this.setState({details: response.data}
                , () =>{
                    console.log(this.state)
                    })
            })
            .catch(err => console.log(err));
    }

    onDelete(){
        let trainId = this.state.details.id;
        axios.get("http://localhost:3000/api/train/${trainId}")
            .then(response =>{
                this.props.history.push('/');
            })
            .catch(err => console.log(err));
    }

    render(){
        return(
            <div>
                <Link classnName={"btn grey"} to={"/"}>Back</Link>
                <h1>{this.state.details.name}</h1>
                <ul className={"collection"}>
                    <li className={"collection-item"}>Price:{this.state.details.price}</li>
                </ul>

                <Link className={"btn"} to={`/trains/edit/${this.state.details.id}`}>Edit</Link>
                <button onClick={this.onDelete.bind(this)} className="bnt red light">Delete</button>
            </div>
        )
    }
}

export default TrainDetails;