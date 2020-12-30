import React, {useState} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect
} from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import Application from './Application'
import './App.scss';
import { AuthContext, useAuth } from "./context/auth";

function App() {
  const sessionstorage = window.sessionStorage
  const existingTokens = JSON.parse(sessionstorage.getItem("jwttoken"))
  const [authTokens, setAuthTokens] = useState(existingTokens)

  const setTokens = (data) => {
    sessionstorage.setItem("jwttoken", JSON.stringify(data))
    setAuthTokens(data)
  }

  return (
    <div className="App">
      <AuthContext.Provider value={{authTokens, setAuthTokens: setTokens}}>
      <Router>
        <nav>
          <ul>
            <li>
              <NavLink exact to="/home"
                activeClassName="selected">
                Hjem
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/login"
                activeClassName="selected">
                Logg Inn
                </NavLink>
            </li>
            <li>
              <NavLink exact to="/app"
                activeClassName="selected">
                Applikasjon
                </NavLink>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/home" component={ Home }/>
          <Route path="/login" component={ Login }/>
          <PrivateRoute path="/app" component={ Application }/>
        </Switch>
        </Router>
        </AuthContext.Provider>
    </div>
  );
}

function PrivateRoute({ component: Component, ...rest }) {

  const { authTokens } = useAuth()
    return (
    <Route {...rest } render = {props => (
        authTokens
          ? <Component {...props} />
          : <Redirect to={{
            pathname: "/login", state: { referer: props.location}
          }} />
    )} />)
}



export default App;
