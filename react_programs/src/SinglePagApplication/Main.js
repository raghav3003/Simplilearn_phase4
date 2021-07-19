import React from 'react';
import Home from './Home';
import Stuff from './Stuff';
import Contact from './Contact';
import { Route, NavLink, HashRouter } from 'react-router-dom';

class MainClass extends React.Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <h1>First SPA</h1>
                    <ul className="header">
                        <li>
                            <NavLink exact to="/home">Home</NavLink>
                        </li>

                        <li>
                            <NavLink to="/stuff">Stuff</NavLink>
                        </li>

                        <li>
                            <NavLink to="/contact">Contact</NavLink>
                        </li>
                    </ul>

                    <div>
                        <Route exact path="/home" component={Home} />
                        <Route path="/stuff" component={Stuff} />
                        <Route path="/contact" component={Contact} />
                    </div>

                </div>
            </HashRouter>
        )
    }
}

export default MainClass;