import React, { useState } from "react";
import { Button, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import logo from "../../Icon/Logo.png";

const Header = () => {
  return (
    <>
      <Navbar  bg="transparent" expand="lg">
        <Navbar.Brand className="ml-5" href="/">
          <img className="w-50 img-fluid" src={logo} alt="" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Form inline>
              <FormControl
                style={{ width: "600px" }}
                type="text"
                placeholder="Search your destination"
                className="mr-sm-2 ml-auto"
              />
            </Form>
            <Nav.Link className="m-3" href="/">
              News
            </Nav.Link>
            <Nav.Link className="m-3" href="/">
              Destination
            </Nav.Link>
            <Nav.Link className="m-3" href="/">
              Blog
            </Nav.Link>
            <Nav.Link className="m-3" href="/">
              Contact
            </Nav.Link>
            <Button
              className="m-3 mr-5"
              style={{
                backgroundColor: "#F9A51A",
                width: "100px",
                color: "black",
              }}
            >
              Login
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
