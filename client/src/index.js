import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from './App';
import PeopleBox from './People';
import PersonBox from './Person';
import PlanetsBox from './Planets';


ReactDOM.render(
    <Router>
        <App>
            <Switch>
                <Route path="/people" exact component={PeopleBox} />
                <Route path="/people/:id" exact component={PersonBox} />
                <Route path="/planets" exact component={PlanetsBox} />
            </Switch>
        </App>
    </Router>,
    document.getElementById('root')
);
