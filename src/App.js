import React, {useReducer, useContext} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect
} from 'react-router-dom'
import Login from './Login'
import {LogoutButton, LoginButton} from './Buttons'
import Home from './Home'
import Application from './Application'
import AuthContext from './context/auth'
import { fetchLogin } from './Requests'

const reducer = async (state, action) => {
    switch (action.type) {
      case 'login': {
        const { username, password } = action.payload
        const response = await fetchLogin(username, password) 
        if (response.ok) {
          console.log("logged in.")
          return {
            ...state,
            user: username,
            hasLoginError: false,
            isLoggedIn: true
          }
        }
        console.log("Not logged in.")
        return {
          ...state,
          hasLoginError: true,
          isLoggedIn: false,
          user: null
        }
      }
      case 'logout':
        return {
          ...state,
          user: null,
          isLoggedIn: false
        }
      default:
        throw new Error("Ukjent type")
    }
}
  
 const init_state = {
    user: null,
    hasLoginError: false
  }

const App = () => {

  const [state, dispatch] = useReducer(reducer, init_state)

  const login = (username, password) => {
    dispatch({ type: 'login', payload: { username, password } })
  }
  const logout = () => dispatch({type: 'logout'})

  const authTokens = {
    user: state.user,
    hasLoginError: state.hasLoginError,
    isLoggedIn: state.isLoggedIn,
    login,
    logout
  }

  return (
    <div className="App">
      <AuthContext.Provider value={authTokens}>
        <Router>
          <div className="app-header">
            <nav>
              <ul>
                <li>
                  <NavLink exact to="/home"
                    activeStyle={{
                      color: "red",
                      fontWeight: "bold"
                    }}>
                    Hjem
                  </NavLink>
                </li>
                <li>
                  <NavLink exact to="/login"
                    activeStyle={{
                      color: "red",
                      fontWeight: "bold"
                    }}>
                    Logg Inn
                    </NavLink>
                </li>
                <li>
                  <NavLink exact to="/app"
                    activeStyle={{
                      color: "red",
                      fontWeight: "bold"
                    }}>
                    Applikasjon
                    </NavLink>
                </li>
              </ul>
            </nav>
            {
              authTokens.isLoggedIn
                ? <LogoutButton />
                : <LoginButton />
            }
          </div>
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

  const { isLoggedIn } = useContext(AuthContext)
    return (
    <Route {...rest } render = {props => (
          isLoggedIn
          ? <Component {...props} />
          : <Redirect to={{
            pathname: "/login", state: { referer: props.location }
          }} />
    )} />)
}

export default App;
