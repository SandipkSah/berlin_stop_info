import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

import { useState } from "react";

import React from "react";

export default function Navbar_com({ login }) {
  const [username, setUsername] = useState("hariommmmmmmm");
  const [inputValue, setInputValue]=useState("")


  return (
    <div>
      <Navbar bg="light" expand="lg" onChange={() => login(inputValue)}>
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
              onChange={e => setInputValue(e.target.value)}
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
