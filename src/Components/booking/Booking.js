import React from "react";
import { useParams } from "react-router-dom";
import BookingForm from "../BookingForm/BookingForm";
import Header from "../Header/Header";

const Booking = (props) => {
  let { name } = useParams();

  return (
    <>
      <Header></Header>
      <div className="row">
        <div style={{ paddingTop: "200px" }} className="col-md-6 px-5">
          <h1>{name}</h1>
          <h3>
            {name} is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </h3>
        </div>
        <div className="col-md-6">
          <BookingForm></BookingForm>
        </div>
      </div>
    </>
  );
};

export default Booking;
