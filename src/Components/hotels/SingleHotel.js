import React, { useContext } from "react";
import { userContext } from "../../App";

const SingleHotel = (props) => {
  const { SignedInUser, hotels } = React.useContext(userContext);
  let [targetPlace, setTargetPlace] = hotels;
  console.log(targetPlace);

  return (
    <div className="col-md-12 col-lg-12">
      <div className="row">
        <div className="d-flex justify content between px-2">
          <div>
            <img
              className="rounded"
              style={{ height: "200px" }}
              src="https://hotelseacrownbd.com/wp-content/uploads/2017/08/Sea-Front-Deluxe-Supreme_Hotel-Sea-Crown_Coxs-Bazar-2-570x400.jpg"
              alt=""
            />
          </div>
          <div className="p-3">
            <h4>Name</h4>
            <small>Rating: 7(10)</small>
            <small>Price: $20 per night</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleHotel;
