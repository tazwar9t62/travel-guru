import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const BookingForm = () => {
  return (
    <div>
      <Form className="shadow p-2" style={{ margin: "20%" }}>
        <Form.Group>
          <Form.Label>Origin</Form.Label>
          <select
            style={{ width: "100%" }}
            className="custom-select"
            id="inputGroupSelect03"
          >
            <option selected>Choose...</option>
            <option value="Dhaka">Dhaka</option>
            <option value="Chattagram">Chattagram</option>
            <option value="Khulna">Khulna</option>
            <option value="Barisal">Barisal</option>
            <option value="Rangpur">Rangpur</option>
          </select>
        </Form.Group>
        <Form.Group>
          <Form.Label>Destination</Form.Label>
          <select className="w-100 custom-select" id="inputGroupSelect03">
            <option selected>Choose...</option>
            <option value="Cox'sBazar">Cox'sBazar</option>
            <option value="Sreemangal">Sreemangal</option>
            <option value="Sundarban">Sundarban</option>
            <option
              value="St. Martin's Island
"
            >
              St. Martin's Island
            </option>
          </select>
        </Form.Group>
        <Form.Group>
          <div className="d-flex justify-content-between">
            <div>
              <Form.Label>From</Form.Label>
              <Form.Control type="date" />
            </div>
            <div>
              <Form.Label>To</Form.Label>
              <Form.Control type="date" />
            </div>
          </div>
        </Form.Group>
        <Link to="/hotels">
          <Button
            style={{
              backgroundColor: "#F9A51A",
              color: "black",
              width: "100%",
              textDecoration: "none",
            }}
            variant="primary"
            type="submit"
          >
            Start Booking
          </Button>
        </Link>
      </Form>
    </div>
  );
};

export default BookingForm;
