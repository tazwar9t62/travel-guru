import React, { useState } from "react";
import destinationData from "../../Data/DestinationData/destinations";
import SinglePlace from "../Header/SinglePlace";

const Places = () => {
  let [places, setPlaces] = useState(destinationData);
  return (
    <div>
      {places.map((place) => (
        <SinglePlace place={place}></SinglePlace>
      ))}
    </div>
  );
};

export default Places;
