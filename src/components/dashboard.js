import React, { useState } from "react";
import Stopinfo from "./StopInfo";
import favStopinfo from "./favStopInfo";
// import Navbar from "./navbar";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";


export default function Dashboard() {
  const [username, setUsername] = useState("hariommmmmmmm");
  // const [inputValue, setInputValue]=useState("")

  const [inputValue, setInputValue] = useState("bi");
  return (
    <div>
      <div>
      <Navbar bg="light" expand="lg" >
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
      {/* <Navbar
        login={(passedfromchild) => {
          setInputValue(passedfromchild);
          // console.log("..........,,,,,,,,,", passedfromchild);
        }}
      /> */}
      <h3 className="row justify-content-center">Search result for stop</h3>
      <div className="ml-auto container ">
        <Stopinfo searchParam={inputValue}></Stopinfo>
      </div>
      <h3 className="text-center">Favourite Stops</h3>
      <div className=" ml-auto container ">
        <favStopinfo></favStopinfo>
      </div>
    </div>
  );
}
