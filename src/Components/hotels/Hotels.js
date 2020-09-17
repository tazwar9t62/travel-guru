import React from "react";
import Header from "../Header/Header";
import SimpleMap from "./googleMap";

const Hotels = () => {
  return (
    <div>
      <Header></Header>
      <div className="col-md-6">
        <h3>hotels</h3>
      </div>
      <div className="col-md-6">
        <SimpleMap></SimpleMap>
      </div>
    </div>
  );
};

export default Hotels;
