import React, { useState } from "react";
// import Hello from "./hello";
import Stopinfo from "./StopInfo";
import Navbar from "./navbar";


export default function Dashboard() {
  const [inputValue, setInputValue] = useState('bi');

  const onInputChange = (e) => {
    setInputValue(e.target.value);
    console.log("Printing from onInputChange Function", inputValue);
  };

  const handleSearchChange = (passedData)=>{
    console.log("Entering data", passedData)

  }

  return (
    <div>
      <Navbar searchParam={handleSearchChange()}/>
      <h3 className="row justify-content-center" >Search result for stop</h3>
      <div className="ml-auto container ">
        <Stopinfo searchParam={inputValue}></Stopinfo>
      </div>
      <h3 className="text-center">Favourite 
      Stops</h3>
      <div className=" ml-auto container ">
        <Stopinfo></Stopinfo>
      </div>
    </div>
  );
}
