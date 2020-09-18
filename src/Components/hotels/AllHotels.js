import React, { useContext } from "react";
import { userContext } from "../../App";

const AllHotels = (props) => {
  const { SignedInUser, hotels } = React.useContext(userContext);
  let [targetPlace, setTargetPlace] = hotels;
  console.log(targetPlace);

  return (
    <>
      {targetPlace.map((hotel) => (
        <>
          <div className="row p-3">
            <div className="d-flex justify content between px-2">
              <div>
                <img
                  className="rounded m-3"
                  style={{ height: "200px", width: "250px" }}
                  src={hotel.image}
                  alt=""
                />
              </div>
              <div className="p-3 mt-4">
                <h4>{hotel.name}</h4>
                <small>Guests: {hotel.guests}</small> <br />
                <small>Bed:{hotel.bed}</small> <br />
                <small>Bath: {hotel.bath}</small> <br />
                <small>
                  Rating: <span className="text-info">{hotel.rating}</span> (10)
                </small>
                <br />
                <h5>
                  Price: <span className="text-success">${hotel.price}</span>{" "}
                  /night
                </h5>
              </div>
            </div>
          </div>
        </>
      ))}
    </>
  );
};

export default AllHotels;
