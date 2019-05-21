import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Home from './Home';
import TrainDetails from './TrainDetails';
import EditTrain from './EditTrain';
import ViewDetails from "./viewDetails";

const Main = () =>(
    <main>
        <Switch>
            <Route extract path={'/'} component={Home}/>
            <Route extract path={'/trains/view'} component={ViewDetails}/>
            <Route extract path={'/trains/:id'} component={TrainDetails}/>
            <Route extract path={'/trains/edit/:id'} component={EditTrain}/>
        </Switch>
    </main>
);

export default Main;