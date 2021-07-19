import React from 'react';

class Register extends React.Component {

    constructor(props){
        super(props);
        this.sendData = this.sendData.bind(this);
    }

    sendData(event) {
        event.preventDefault();
        const pass = event.target.password.value;
        const cpass = event.target.cpassword.value;
        const username = event.target.username.value;
        const fname = event.target.fname.value;
        const lname = event.target.lname.value;

        if (pass !== cpass) {
            alert("Password do not match");
            return;
        }

        var payload = {
            username: event.target.username.value,
            fname: event.target.fname.value,
            lname: event.target.lname.value,
            password: event.target.password.value
        };
        
        var data = new FormData();
        data.append( "json", JSON.stringify( payload ) );
        
        const requestOptions = {
            method: 'post',
            headers: {'Accept': 'application/json, text/plain, */*', 'Content-Type': 'application/json', "Access-Control-Allow-Origin" : "*", "Access-Control-Allow-Credentials" : true },
            body: JSON.stringify(payload)
        };
        console.log(requestOptions)

        fetch("http://localhost:8080/user/add", requestOptions)
            // .then(response => response.json())
            .then(response => {
                alert("Registration successful, you can login now")
                this.props.history.replace("/login")
            });
    }

    render() {
        return (
            <div style={{"justifyContent": "center", "alignItems": "center"}}>
                <form onSubmit={this.sendData}>
                    <pre>
                    <label for="fname">First name:</label>
                    <input type="text" id="fname" name="fname" />
                    <br />

                    <label for="lname">Last name:</label>
                    <input type="text" id="lname" name="lname" />
                    <br />

                    <label for="username">Username:</label>
                    <input type="text" id="username" name="username" />
                    <br />

                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password" />
                    <br />

                    <label for="cpassword">Confirm password:</label>
                    <input　type="password" id="cpassword" name="cpassword" />
                    <br />

                    <input　type="submit" value="submit" />
                    </pre>
                </form>
                <button value="" onClick={() => {this.props.history.replace("/login")}}>Already have an account, Login!</button>
            </div>
        )
    }
}

export default Register;