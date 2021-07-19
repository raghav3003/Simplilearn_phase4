import React from 'react';
import { Route, HashRouter as Router, Switch, Redirect } from "react-router-dom";

import Login from './screens/Login';
import Register from './screens/Register';

const Routes = (props) => {
    <Router {...props}>
        <Switch>
            <Route path="/login" component={Login}>
                <Login />
            </Route>

            <Route path="/register">
                <Register />
            </Route>

            <Route exact path="/">
                <Redirect to="/login" />
            </Route>

            <Route path="*">
                <Login />
            </Route>
        </Switch>
    </Router>
}

export default Routes;