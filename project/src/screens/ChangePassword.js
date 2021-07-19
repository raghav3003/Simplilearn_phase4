import React from 'react';
import { format } from 'react-string-format';

class ChangePassword extends React.Component {

    constructor(props){
        super(props);
        this.sendData = this.sendData.bind(this);
    }

    sendData(event) {
        event.preventDefault();
        const old_pass = event.target.old_password.value;
        const pass = event.target.password.value;
        const cpass = event.target.confirm_password.value;
        const username = event.target.username.value;

        if (pass !== cpass) {
            alert("New password do not match");
            return;
        }
        
        const requestOptions = {
            method: 'post'
        };
        console.log(requestOptions)
        const path = format("http://localhost:8080/user/updatePassword?username={0}&password={1}&oldPassword={2}", username, pass, old_pass);

        fetch(path, requestOptions)
            .then( response => response.json() )
            .then(response => {
                if (response === true) {
                    alert("Update successful");
                } else {
                    alert("Invalid credentials");
                }
            });
    }

    render() {
        return (
            <div>
                <h1>Update password</h1>
                <form onSubmit={(event) => this.sendData(event)}>
                    <pre>

                    <label for="username">Username:</label>
                    <input type="text" id="username" name="username" />
                    <br />

                    <label for="old_password">Old password:</label>
                    <input type="password" id="old_password" name="old_password" />
                    <br />

                    <label for="password">New password:</label>
                    <input　type="password" id="password" name="password" />
                    <br />

                    <label for="confirm_password">Confirm password:</label>
                    <input type="password" id="confirm_password" name="confirm_password" />
                    <br />

                    <input　type="submit" value="submit" />
                    </pre>
                </form>
            </div>
        )
    }

}

export default ChangePassword;