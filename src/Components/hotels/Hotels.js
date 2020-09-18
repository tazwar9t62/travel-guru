import React from "react";
import Header from "../Header/Header";
import SimpleMap from "./googleMap";
import SingleHotel from "./SingleHotel";

const Hotels = () => {
  return (
    <div>
      <Header></Header>
      <div className="row">
        <div className="col-md-6">
          <SingleHotel />
        </div>
        <div className="col-md-6">
          <SimpleMap></SimpleMap>
        </div>
      </div>
    </div>
  );
};

export default Hotels;
