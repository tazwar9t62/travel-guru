import React from "react";
import Header from "../Header/Header";
import SimpleMap from "./googleMap";
import AllHotels from "./AllHotels";

const Hotels = () => {
  return (
    <div>
      <Header></Header>
      <div className="row">
        <div className="col-md-6">
          <AllHotels />
        </div>
        <div className="col-md-6">
          <SimpleMap></SimpleMap>
        </div>
      </div>
    </div>
  );
};

export default Hotels;
