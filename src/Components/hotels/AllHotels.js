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
          <div className="row">
            <div className="d-flex justify content between px-2">
              <div>
                <img
                  className="rounded"
                  style={{ height: "200px" }}
                  src={hotel.image}
                  alt=""
                />
              </div>
              <div className="p-3">
                <h4>{hotel.name}</h4>
                <small>Rating: 7(10)</small>
                <small>Price: ${hotel.price} per night</small>
              </div>
            </div>
          </div>
        </>
      ))}
    </>
  );
};

export default AllHotels;
