import React from "react";
import { Button, Card, Carousel } from "react-bootstrap";

const SinglePlace = (props) => {
  console.log(props.place);
  let { id, name, description, img } = props.place;
  return (
    <div
      style={{ float: "left" }}
      className="col-md-3 col-sm-12 col-lg-3  pt-2"
    >
      {" "}
      <Card bg="transpaprent" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button
            style={{
              backgroundColor: "#F9A51A",
              width: "100px",
              color: "black",
            }}
          >
            Booking
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SinglePlace;
