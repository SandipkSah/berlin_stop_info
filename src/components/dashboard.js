import React, { useEffect, useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const axios = require("axios");

export default function Dashboard() {
  const Options = [];

  const [inputValue, setInputValue] = useState();
  console.log("*", Options);
  const history = useHistory();

  const handleSubmit2 = (e) => {
    e.preventDefault();
    history.push({
      pathname: "/stopInfo",
      state: { detail: inputValue },
    });
  };

  const onInputChange = (e) => {
    setInputValue(e.target.value);
    console.log("Printing from onInputChange Function", inputValue);
  };

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Get Stop Info</h2>
          <Form>
            <Form.Group id="origin">
              <Form.Control
                type="email"
                onChange={onInputChange}
                required
                placeholder="enter name of place to search"
              />
            </Form.Group>
            <Button
              onClick={(e) => handleSubmit2(e)}
              className="w-100 mt-3"
              type="submit"
            >
              Search for Stop
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
}
