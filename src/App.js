import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from "./Components/Navbar";

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <Switch>
          <Route path="/about">
            <App />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/login">
              <Login />
          </Route>
          <Route path="/logout">
              <LogOut />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

