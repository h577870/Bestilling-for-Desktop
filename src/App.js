import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom'

import Login from './components/Login'
import Home from './components/Home'
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
          </ul>
        </nav>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
