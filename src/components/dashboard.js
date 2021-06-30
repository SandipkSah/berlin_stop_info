import React, { useRef, useState, useAuth } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import {getoptions as options} from "./data";
import stopInfo from "./StopInfo";
import Select from "react-select";
const axios = require("axios");

export default function Dashboard() {
  const [inputValue, setInputValue] = useState();

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("from handle function of try block");
    axios
      .get("https://v5.vbb.transport.rest/stations?query=meh")
      .then((response) => {
        console.log(response.data);
      });
  }

  const data = axios.get(
    "https://v5.vbb.transport.rest/stations?query=mehringd"
  );

  const history = useHistory();
  const handleSubmit2 = (e) => {
    e.preventDefault();
    console.log("hello-----");
    console.log(inputValue);
    console.log("hello-----");
    console.log(data);
    console.log("hello-----");

    //console.log(`${e.target}`);
    history.push("/stopInfo");
  };

  const handleOnChange = () => {};

  const handleSelectChange = (e) => {
    // e.preventDefault();
    console.log(e);
  };

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Get Stop Info</h2>
          <Form>
            <Form.Group id="origin">
              <Form.Label>Select Stop</Form.Label>
              <Select
                // cacheOptions
                options={options(inputValue)}
                // defaultOptions
                onInputChange={(e) => {
                  console.log(inputValue);
                  setInputValue(e);
                }}
                isSearchable
                placeholder="start typing to find"
              />
            </Form.Group>
            {/* <Link to="/stopInfo"> */}
            <Button
              onClick={(e) => handleSubmit2(e)}
              className="w-100 mt-3"
              type="submit"
            >
              Get Info
            </Button>
            {/* </Link> */}
          </Form>
        </Card.Body>
      </Card>
    </>
  );
}
