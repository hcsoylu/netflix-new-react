import React from "react";
import {
  Navbar,
  NavDropdown,
  Form,
  Button,
  Nav,
  FormControl,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import img from "./assets/netflix-logo.png";

function Navnet() {
  return (
    <div>
      <Navbar
        id="navbar-mine"
        style={{ backgroundColor: "black", color: "wihte" }}
        expand="lg"
      >
        <Navbar.Brand href="#home">
          <img
            className="img-logo"
            style={{ height: "40px", width: "40px" }}
            src={img}
          ></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link style={{ color: "white" }} href="#home">
              Home
            </Nav.Link>
            <Nav.Link style={{ color: "white" }} href="#link">
              Tv shows
            </Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>{" "}
    </div>
  );
}

export default Navnet;
