import React from 'react';

class CounterExample extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
        this.increment = this.increment.bind(this);
    }

    increment() {
        console.log("Current count: " + this.state.count);
        this.setState({
            count: this.state.count + 1
        });
    }

    render() {
        return (
            <div>
                <p>Counter: {this.state.count}</p>
                <button onClick={this.increment}>Click me</button>
            </div>
        )
    }

}

export default CounterExample;