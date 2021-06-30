import React, { useRef, useState, useAuth } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import Path from "./Path";
import { Link, useHistory } from "react-router-dom";

const axios = require("axios");

export default function Dashboard() {
  //   const emailRef = useRef()
  //   const passwordRef = useRef()
  //   const { login } = useAuth()
  //   const [error, setError] = useState("")
  //   const [loading, setLoading] = useState(false);
  //   const history = useHistory()

  const [originstop, destinationstop] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      console.log("from handle function of try block");
      axios
        .get(
          "https://v5.vbb.transport.rest/locations?query=alexanderplatz&results=1"
        )
        .then((response) => {
          console.log(response.data[0]);
        });
    } catch {
      console.log("from handle function from catch block");
    }
  }

  async function onChangeOrigin(e) {
    e.preventDefault();

    console.log("from handle function origin change");
    console.log(`${e.target.value}`);
  }

  async function onChangeDestination(e) {
    e.preventDefault();

    console.log("from handle function destination change");
    console.log(`${e.target.value}`);
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Get to your Destiny</h2>
          {/* {console.log("from handle function from main folder")} */}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="origin">
              <Form.Label>From</Form.Label>
              <Form.Control type="text" onChange={onChangeOrigin} required />

{/*               
                <select
                  ref="userInput"
                  required
                  className="form-control"
                  //value={['a', 'b', 'c', 'd', 'e']}
                  onChange={onChangeOrigin}
                >
                  {['a', 'b', 'c', 'd', 'e'].map(function (user) {
                    return (
                      <option key={user} value={user}>
                        {user}
                      </option>
                    );
                  })}
                </select>
               */}
            </Form.Group>
            <Form.Group id="destination">
              <Form.Label>To</Form.Label>
              <Form.Control
                type="text"
                required
                onChange={onChangeDestination}
              />
            </Form.Group>
            <Link to="/Path">
              <Button className="w-100 mt-3" type="submit">
                Find Path
              </Button>
            </Link>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
}
