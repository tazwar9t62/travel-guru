import React from "react";
import { Button, Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const SinglePlace = (props) => {
  let { name, description, img } = props.place;
  let history = useHistory();
  let handleDetails = (id) => {
    history.push(`places/${id}`);
  };
  return (
    <div
      style={{ float: "left" }}
      className="col-md-3 col-sm-12 col-lg-3  pt-2"
    >
      <Card style={{ width: "18rem", background: "transparent" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>

          <Button
            style={{
              backgroundColor: "#F9A51A",
              color: "black",
            }}
            onClick={() => handleDetails(name)}
          >
            Booking ->
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SinglePlace;
