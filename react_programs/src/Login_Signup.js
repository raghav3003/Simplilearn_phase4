import React from 'react';

class Login_Signup extends React.Component {

    constructor() {
        super();
        this.state = {
            isLogin: true
        }
        this.setLogin = this.setLogin.bind(this)
        this.setSignup = this.setSignup.bind(this)
    }

    setLogin() {
        this.setState({
            isLogin: true
        })
    }

    setSignup() {
        this.setState({
            isLogin: false
        })
    }

    render() {

        let page;
        if (this.state.isLogin) {
            page =
            <form>
                <h4>Login Form</h4>
                
                    <label>Username</label>
                    <input type = "text"></input>
                    <br/>

                    <label>Password</label>
                    <input type = "password"></input>
                    <br/>

                    <button>Submit</button>
                
            </form>
        } else {
            page =
            <form>
                <h4>Signup Form</h4>
                
                    <label>Username</label>
                    <input type = "text"></input>
                    <br/>

                    <label>Roll number   </label>
                    <input type = "number"></input>
                    <br/>

                    <label>Age</label>
                    <input type = "number"></input>
                    <br/>

                    <label>Password</label>
                    <input type = "password"></input>
                    <br/>

                    <label>Confirm password</label>
                    <input type = "password"></input>
                    <br/>

                    <button>Submit</button>
                
            </form>
        }

        return (
            <div>
                <div>
                    <button onClick={this.setLogin}>Login</button>
                    <button onClick={this.setSignup}>Signup</button>
                </div>
                    {page}
                <div>
                
                </div>
            </div>
        )
    }
}

export default Login_Signup;