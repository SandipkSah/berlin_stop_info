import React, { useState } from "react";
import Stopinfo from "./StopInfo";
import { Form, FormControl } from "react-bootstrap";

export default function Dashboard() {
  const [inputValue, setInputValue] = useState("a");
  return (
    <div>
      <Form>
        <FormControl
          type="search"
          placeholder="Start typing to search"
          className="searchbutton"
          aria-label="Search"
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
      </Form>
      <div className="ml-auto container ">
        <Stopinfo searchParam={inputValue} />
      </div>
    </div>
  );
}
