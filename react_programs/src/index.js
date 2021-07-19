import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import SetStateExample from './setStateExample';
import ArrayExample from './ArrayExample';
import ListExample from './ListExample';
import Music from './LifeCycleExample';
import ComponentWillUnmount from './UnmountExample';
import CounterExample from './CounterExample';
import Login_Signup from './Login_Signup';
import MainClass from './SinglePagApplication/Main';

/*class MyComponent extends React.Component {
    render () {
        return (
            <div>
                <h1>Hello</h1>
                <Header name="Raghav" id="101" />
            </div>
        );
    }
}

const Header = (props) => {
    return (
        <div>
            <Footer name={props.name} id={props.id} />
        </div>
    )
}

const Footer = (props) => {
    return (
        <div>
            <h1>Welcome: {props.name}</h1>
            <h1>ID: {props.id}</h1>
        </div>
    )
}

const myList = ['Raghav', 'Sam', 'Peter']
*/
ReactDOM.render(<MainClass />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
