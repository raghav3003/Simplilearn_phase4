import React from 'react';
import ReactDOM from "react-dom";

class Music extends React.Component {
    constructor() {
        super();
        this.state = { Instrument: "Guitar" };
    }

    shouldComponentUpdate() {
        return true;
    }

    componentDidMount() {
        setTimeout (() => {this.setState({Instrument: "Drums"})}, 2000)
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        document.getElementById("CON1").innerHTML = "Before the update, the instrument was " + prevState.Instrument;
    }

    componentDidUpdate() {
        document.getElementById("CON2").innerHTML = "The updated instrument is " + this.state.Instrument;
    }

    change = () => {
        this.setState({ Instrument: "Drums" });
    };

    render () {
        return (
            <div>
                <h1>I know how to play {this.state.Instrument}</h1>
                <button type="button" onClick={this.change}>
                    Change Instrument
                </button>
                <div id="CON1"></div>
                <div id="CON2"></div>
            </div>
        )
    }
}

export default Music;