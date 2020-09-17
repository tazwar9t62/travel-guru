import React, { useState } from "react";
import "./App.css";
import Home from "./Components/Home/Home";
import destionationData from "../src/Data/DestinationData/destinations";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Error404 from "./Components/Error/Error404";
import Booking from "./Components/booking/Booking";
import Hotels from "./Components/hotels/Hotels";
import Credentials from "./Components/Credentials/Credentials";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/places/:name">
            <Booking />
          </Route>
          <Route path="/hotels">
            <Hotels />
          </Route>
          <Route path="/login">
            <Credentials />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <Error404 />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
