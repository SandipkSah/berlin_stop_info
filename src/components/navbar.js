import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

import {useState} from "react";

const navbar = (props) => {
  const handleInput = (e) => {
    props.searchParam = e.target.value
    console.log("-------handle input", e.target.value);
  };
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#">Favourite stops</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="mr-2"
              aria-label="Search"
              onChange={handleInput}
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default navbar;
