import React from 'react';
import { findAllInRenderedTree } from 'react-dom/cjs/react-dom-test-utils.production.min';
import { useHistory } from "react-router-dom";
import { format } from 'react-string-format';

class AdminLogin extends React.Component {

    constructor() {
        super();
        this.state = {
            adminPass: "Admin",
            adminUsername: "Admin"
        }
        this.getData = this.getData.bind(this);
    }

    getData(event) {
        event.preventDefault();
        const pass = event.target.password.value;
        const username = event.target.username.value;
        if (username !== this.state.adminUsername) {
            alert("wrong credentials");
            return;
        } 
        const path = format("http://localhost:8080/user/validate?username={0}&password={1}", username, pass);

        const options = {
            method: 'POST'
        };

        console.log(path);
        fetch( path, options )
            .then( response => response.json() )
            .then( response => {
                if (response === true) {
                    this.props.history.replace("/adminHome")
                } else {
                    alert("Invalid credentials")
                    this.props.history.replace("/adminLogin")
                }
        } );
    }

    render() {
        return (
            <div style={{"justifyContent": "center", "alignItems": "center"}}>
                <form type="post" onSubmit={(event) => this.getData(event)}>
                    <pre>
                        <label for="username">Admin username:</label>
                        <input type="text" id="username" name="username" />
                        <br />

                        <label for="password">Admin password:</label>
                        <input type="password" id="password" name="password" />
                        <br />

                        <input　type="submit" value="submit" />
                    </pre>
                </form>
            </div>
        )
    }
}

export default AdminLogin;