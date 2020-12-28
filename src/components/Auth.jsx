import React, { Component } from 'react'
import Redirect from 'react-router-dom'
const axios = require('axios').default


class Auth extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: false
        }
        this.requestLogin = this.requestLogin.bind(this)
        this.userLogin = this.userLogin.bind(this)
    }

    loggedIn = () => {
        return this.state.isLoggedIn
    }

    async userLogin(username, password) {
        const response = await this.requestLogin(username, password)
        switch (response.status) {
            case 200:
                this.setState({
                    isLoggedIn: true,

                });
                <Redirect to="/app" />;
                break;
            case 401:
                console.log("Unauthorized");
                <Redirect to="/login" />;
                break;
            default:
                console.log("Unknown error.");
                <Redirect to="/login" />;
                break;
        }
            
    }
    
    async requestLogin(username, password) {
        const url = "localhost:8080/"
        let response
        try {
            response = await axios.post(
                `${url}bruker/logginn`,
                {
                    brukernavn: username,
                    passord: password
                }
            )
        }
        catch (error) {
            console.error(error)
        }
        return response
    }
}