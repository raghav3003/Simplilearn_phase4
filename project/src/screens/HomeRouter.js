import React from 'react';

import { BrowserRouter as Router, Switch, Route, Link, useHistory } from 'react-router-dom';
import Home from './Home';
import ChangePassword from './ChangePassword';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';

function HomeRouter() {
    const history = useHistory();
    return (
        
    <Router>
        <div>
            <Nav>
                <Bars />

                <NavMenu>
                    <NavLink to='/home'>
                        Home
                    </NavLink>
                    <NavLink to='/profile'>
                        Profile
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <button onClick={() => {
                        history.entries = [];
                        history.index = -1;
                        history.replace("/login")}
                    }>Logout</button>
                </NavBtn>
            </Nav>

            <Switch>
                <Route exact path='/'> <Home /> </Route>
                <Route path='/home'> <Home /> </Route>
                <Route path='/profile'> <ChangePassword /> </Route>
            </Switch>
        </div>
    </Router>
  );
}

export default HomeRouter;