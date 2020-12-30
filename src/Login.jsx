import React, { useState } from 'react'
import {
    Redirect
} from 'react-router-dom'
import { useAuth } from './context/auth.js'
const axios = require('axios').default

function Login(props) {
    
    const [isLoggedIn, setLoggedIn] = useState(false)
    const [isError, setIsError] = useState(false)
    const [userName, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const { setAuthTokens } = useAuth() 
    
    async function requestLogin() {
        const url = "localhost:8080/"
        let response
        try {
            response = await axios.post(
                `${url}bruker/logginn`,
                {
                    brukernavn: userName,
                    passord: password
                }
            )
        }
        catch (error) {
            console.error(error)
        }
        return response
    }

    async function userLogin() {
        if (isLoggedIn) {
            return <Redirect to="/app"/>
        }
        const response = await requestLogin()
        switch (response.status) {
            case 200:
                setAuthTokens(response.headers["jwttoken"]);
                setLoggedIn(true);
                <Redirect to="/app" />;
                break;
            case 401:
                setIsError(true);
                <Redirect to="/login" />;
                break;
            default:
                setIsError(true);
                <Redirect to="/login" />;
                break;
        }
            
    }
        return (
            <div className="loginForm">
                <h2>Innlogging</h2>
                <form>
                    <p className="username">Brukernavn:</p>
                    <input type="text" value={userName}
                        onChange={e => { setUsername(e.target.value) }}></input>
                    <p className="password">Passord:</p>
                    <input type="password" value={password}
                        onChange={e => { setPassword(e.target.value) }}></input>
                    <button
                        className="loginbutton"
                        onClick={userLogin}>
                        Logg inn
                    </button>
                </form>
            </div>
        )
}


export default Login;