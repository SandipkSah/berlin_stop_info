import React, { useState } from "react";
import Stopinfo from "./StopInfo";
import FavStopinfo from "./favStopInfo";
// import Navbar from "./navbar";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

export default function Dashboard() {
  // const [username, setUsername] = useState("hariommmmmmmm");
  // const [inputValue, setInputValue]=useState("")

  const [inputValue, setInputValue] = useState("a");
  return (
    <div>
      <div>
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
          </Navbar.Collapse>
        </Navbar>
      </div>
      {/* <Navbar
        login={(passedfromchild) => {
          setInputValue(passedfromchild);
          // console.log("..........,,,,,,,,,", passedfromchild);
        }}
      /> */}
      <Form>
        <FormControl
          type="search"
          placeholder="Start typing to search"
          className="searchbutton"
          aria-label="Search"
          onChange={(e) => {
            // localStorage.setItem("name", e.target.value);
            setInputValue(e.target.value);
            // console.log("jjjjjjjjjjjjjjj",localStorage)
          }}
        />
        {/* <h3 className="row justify-content-center">Search result for stop</h3> */}
        {/* <Button variant="outline-success">Search</Button> */}
      </Form>
      <div className="ml-auto container ">
        <Stopinfo searchParam={inputValue}></Stopinfo>
      </div>
      {/* <h3 className="text-center">Favourite Stops</h3>
      <div className=" ml-auto container ">
        <FavStopinfo></FavStopinfo> */}
      {/* </div> */}
    </div>
  );
}
