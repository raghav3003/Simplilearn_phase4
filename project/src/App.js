import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginSignupScreen from './screens/LoginSignupScreen';
import Home from './screens/Home';
import {HashRouter} from 'react-router-dom';
import Login from './screens/Login';
import Register from './screens/Register';
import HomeRouter from './screens/HomeRouter';
import AdminHomeRouter from './screens/AdminHomeRouter';
import AdminLogin from './screens/AdminLogin';

class App extends React.Component {
    render() {
        return (
            <HashRouter>
                <div className="app-routes">
                    <Switch>
                        <Route path="/login" component={Login} />
                        <Route path="/register" component={Register} />
                        <Route path="/home" component={HomeRouter} />
                        <Route path="/adminHome" component={AdminHomeRouter} />
                        <Route path="/adminLogin" component={AdminLogin} />
                        <Route exact path="/" component={Login} />
                    </Switch>
                </div>
            </HashRouter>
        )
    }
}

            

export default App;