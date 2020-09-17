import React from "react";
import { useParams } from "react-router-dom";
import BookingForm from "../BookingForm/BookingForm";
import Header from "../Header/Header";
import places from "../../Data/DestinationData/destinations";

const Booking = (props) => {
  let { name } = useParams();
  // console.log(places, name);
  let targetPlace = places.find((el) => el.name === name);
  // console.log(targetPlace);
  const divStyle = {
    width: "100%",
    height: "800px",
    backgroundImage: `url(${targetPlace.img})`,
    backgroundSize: "cover",
    BackgroundPosition: "center",
  };

  return (
    <div style={divStyle} className="text-white">
      <Header></Header>
      <div className="row">
        <div style={{ paddingTop: "200px" }} className="col-md-6 px-5">
          <h1>{targetPlace.name}</h1>
          <h3>{targetPlace.description}</h3>
        </div>
        <div className="col-md-6">
          <BookingForm></BookingForm>
        </div>
      </div>
    </div>
  );
};

export default Booking;
