import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect
} from 'react-router-dom'
import Auth from './components/Auth'
import Login from './components/Login'
import Home from './components/Home'
import Application from './components/Application'
import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li>
              <NavLink
                exact to="/home"
                activeClassName="selected">
                Hjem
              </NavLink>
            </li>
            <li>
              <NavLink
                exact to="/login"
                activeClassName="selected">
                Logg Inn
                </NavLink>
            </li>
            <li>
              <NavLink
                exact to="/application"
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
    </div>
  );
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={
    (props) => (
      Auth.loggedIn() === true
        ? <Component {...props} />
        : <Redirect to='/login' />
    )} />
)



export default App;
