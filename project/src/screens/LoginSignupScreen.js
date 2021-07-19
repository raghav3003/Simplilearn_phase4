import React from "react";
import Login from "./Login";
import Register from "./Register";

class LoginSignupScreen extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <Login/>
                <Register/>
            </div>
        )
    }
}

export default LoginSignupScreen;