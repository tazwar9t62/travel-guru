import React, { createContext, useState } from "react";
import "./App.css";
import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Error404 from "./Components/Error/Error404";
import Booking from "./Components/booking/Booking";
import Hotels from "./Components/hotels/Hotels";
import Credentials from "./Components/Credentials/Credentials";
export let userContext = createContext({});

function App() {
  let [loggedInUser, setLoggedInUser] = useState([]);

  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
      {" "}
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
    </userContext.Provider>
  );
}

export default App;
