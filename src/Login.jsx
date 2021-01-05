import React, { useState } from 'react'
import {
    useHistory
} from 'react-router-dom'
import { useAuth } from './context/auth.js'
const axios = require('axios').default

function Login(props) {
    
    const [isLoggedIn, setLoggedIn] = useState(false)
    const [isError, setIsError] = useState("")
    const [userName, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const { setAuthTokens } = useAuth()
    const history = useHistory()
    /*
    TODO: Responsen behandles ikke riktig og man blir dermed ikke redirecte
    */
    function requestLogin() {
        axios.post(
            "http://localhost:8080/bruker/logginn",
            JSON.stringify(
                {
                    brukernavn: userName,
                    passord: password
                }
            ),
            {
                headers: {'Content-Type':'application/json'}
            }
        ).then(function (response) {
            userLogin(response)
        }).catch(function (error) {
            console.warn(error)
            setIsError(error)
        })
    }

    /*
    TODO: userLogin blir aldri kalt fra requestLogin?
    */

    function userLogin(response) {
        if (isLoggedIn) {
            history.push("/app")
        }
        switch (response.statusText) {
            /*
            Setter token på Authorization-header for alle fremtidige requests.
            */
            case "OK":
                const token = response.headers["jwt"];
                if (token != null) {
                    axios.defaults.headers.common["Authorization"] = token
                } else {
                    delete axios.defaults.headers.common["Authorization"]
                }
                setAuthTokens(token);
                setLoggedIn(true);
                history.push("/app");
                break;
            
            case "Unauthorized":
                setIsError("401");
                history.push("/login");
                break;
            
            default:
                setIsError("annen feil");
                history.push("/login");
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
                        onClick={requestLogin}>
                        Logg inn
                    </button>
                    <p>{isError}</p>
                </form>
            </div>
        )
}


export default Login;