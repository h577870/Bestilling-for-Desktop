import React, { Component } from 'react'

class Login extends Component {
    render() {
        return (
            <LoginForm />
        )
    }
}

class LoginForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
        this.handleUsername = this.handleUsername.bind(this)
    }

    handleUsername(event) {
        this.setState({username: event.target.value})
    }

    handlePassword(event) {
        this.setState({password: event.target.value})
    }

    render() {
        return (
            <div className="loginForm">
                <h2>Innlogging</h2>
                <form>
                    <p className="username">Brukernavn:</p>
                    <input type="text" value={this.state.username} onChange={this.handleUsername}></input>
                    <p className="password">Passord:</p>
                    <input type="password" value={this.state.password} onChange={this.handlePassword}></input>
                    <button
                        className="loginbutton"
                        onClick={() => console.log(this.state.username)}>
                        Logg inn
                    </button>
                </form>
            </div>
        )
    }
}

export default Login;