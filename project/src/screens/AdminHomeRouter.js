import React from 'react';

import { BrowserRouter as Router, Switch, Route, Link, useHistory } from 'react-router-dom';
import AdminHome from './AdminHome';
import ChangePassword from './ChangePassword';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';

function AdminHomeRouter() {
    const history = useHistory();
    return (
        
    <Router>
        <div>
            <Nav>
                <Bars />

                <NavMenu>
                    <NavLink to='/adminhome'>
                        Home
                    </NavLink>
                    <NavLink to='/adminprofile'>
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
                <Route exact path='/'> <AdminHome /> </Route>
                <Route path='/adminhome'> <AdminHome /> </Route>
                <Route path='/adminprofile'> <ChangePassword /> </Route>
            </Switch>
        </div>
    </Router>
  );
}

export default AdminHomeRouter;