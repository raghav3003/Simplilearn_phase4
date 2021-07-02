import React from 'react';

class ComponentWillUnmount extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            show: true
        }
    }

    render () {
        return (
            <div>
                {this.state.show ? <ChildComponent/> : null}
                <button onClick={() => {
                    this.setState({show: !this.state.show})
                }}>
                Click me to toggle
                </button>
            </div>
        )
    }
}

class ChildComponent extends React.Component {
    componentWillUnmount () {
        alert("This will unmount");
    }

    render () {
        return <p>I am a child component</p>
    }
}

export default ComponentWillUnmount;