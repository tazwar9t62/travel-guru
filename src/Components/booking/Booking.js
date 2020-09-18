import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import BookingForm from "../BookingForm/BookingForm";
import Header from "../Header/Header";
import places from "../../Data/DestinationData/destinations";
import SingleHotel from "../hotels/SingleHotel";
import { userContext } from "../../App";

const Booking = (props) => {
  let { name } = useParams();
  const { SignedInUser, hotels } = React.useContext(userContext);
  let [targetPlace, setTargetPlace] = hotels;

  // console.log(places, name);
  let destinationPlace = places.find((el) => el.name === name);
  let destinationHotels = destinationPlace.hotels;
  console.log(destinationHotels);
  setTargetPlace(destinationHotels);

  const divStyle = {
    width: "100%",
    height: "800px",
    backgroundImage: `url(${destinationPlace.img})`,
    backgroundSize: "cover",
    BackgroundPosition: "center",
  };

  return (
    <div style={divStyle} className="text-white">
      <Header></Header>
      <div className="row">
        <div style={{ paddingTop: "200px" }} className="col-md-6 px-5">
          <h1>{destinationPlace.name}</h1>
          <h3>{destinationPlace.description}</h3>
        </div>
        <div className="col-md-6">
          <BookingForm></BookingForm>
        </div>
      </div>
      {/* {destinationHotels.map((sh) => (
        <SingleHotel sh={sh}></SingleHotel>
      ))} */}
    </div>
  );
};

export default Booking;
