import React, { useEffect, useState } from "react";
import Select from "react-select";
import { Form, Button, Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const axios = require("axios");

export default function Dashboard() {
  const Options = [];

  let JSONData = [];
  const [inputValue, setInputValue] = useState({});

  useEffect(() => {
    const getData = async () => {
      await axios.get().then((res) => {
        console.log(`hello from useEffect console ..... `);
        console.log(res.data)
        JSONData = Object.values(res.data);
        console.log("*****", JSONData[4]);
        console.log("the length of data is ");
        JSONData.forEach((each_data) => {
          Options.push({ value: each_data.name, label: each_data.name });
        })
        





        //setInputValue(Options[4])
        // console.log("the options are \n", inputValue["id"]);
        console.log(JSONData[4].id)
      })
      .catch((error)=>(console.log(error)))

    };
    getData();
  })

  console.log("*", Options);


  const history = useHistory();
  const handleSubmit2 = (e) => {
    e.preventDefault();
    // const someEventHandler = event => {
      history.push({
          pathname: '/stopInfo',
          // search: '?query=abc',
          state: { detail: JSONData[4].id }
      });
   
    
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
                onChange={(e) => {
                  console.log(inputValue);
                  setInputValue(e);
                }}
                options={Options}
                placeholder="start typing"
                isSearchable
              />
            </Form.Group>
            <Button
              onClick={(e) => handleSubmit2(e)}
              className="w-100 mt-3"
              type="submit"
            >
              Get Info
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
}
