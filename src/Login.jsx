import React, { useState, useContext } from 'react'
import AuthContext from './context/auth.js'

function Login(props) {
    
    const [userName, setUsername] = useState("") //Form
    const [password, setPassword] = useState("") //Form
    const { login, hasLoginError } = useContext(AuthContext)
    
    const onSubmit = e => {
        e.preventDefault()
        login(userName, password)
    }

    return (
        <div className="loginForm">
            <h2>Innlogging</h2>
            <form onSubmit={onSubmit}>
                {hasLoginError && <p>Feil brukernavn eller passord.</p>}
                <p className="username">Brukernavn:</p>
                <input type="text" value={userName} autoComplete="username"
                    onChange={e => { setUsername(e.target.value) }}></input>
                <p className="password">Passord:</p>
                <input type="password" value={password} autoComplete="current-password"
                    onChange={e => { setPassword(e.target.value) }}></input>
                <button
                    className="loginbutton">
                    Logg inn
                </button>
            </form>
        </div>
    )
}


export default Login;