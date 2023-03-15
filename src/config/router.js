import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Login from "../components/Login";
import Signup from "../components/Signup";
import Home from "../views/Home";

export default function App() {
    return(
              <Router>
                <div>
                  <Switch>
                    <Route path="/login">
                      <Login />
                    </Route>
                    <Route path="/signup">
                      <Signup />
                    </Route>
                    <Route path="/">
                      <Home />
                    </Route>
                  </Switch>
                </div>
              </Router>
    )
}