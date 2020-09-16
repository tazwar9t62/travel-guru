import React, { useState } from "react";
import "./App.css";
import Home from "./Components/Home/Home";
import destionationData from "../src/Data/DestinationData/destinations";
import SinglePlace from "./Components/Header/SinglePlace";

function App() {
  let [places, setPlaces] = useState(destionationData);
  console.log(places);
  return (
    <div>
      <Home />
      {places.map((place) => (
        <SinglePlace place={place}></SinglePlace>
      ))}
    </div>
  );
}

export default App;
