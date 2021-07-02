import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

class SetStateExample extends React.Component {
    constructor () {
        super();
        this.state = {
            name: 'Raghav',
            id: 101
        }
    }

    render () {
        setTimeout(() => {
            this.setState({name: 'John', id: 102});
        }, 2000)

        return (
            <div>
                <h1>Hello {this.state.name}</h1>
                <h1>ID {this.state.id}</h1>
            </div>
        );
    }
}

export default SetStateExample;