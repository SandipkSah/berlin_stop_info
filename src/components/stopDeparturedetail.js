import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function Stopdepartures(props) {
  const location = useLocation();
  const passdata = {};

  //   const [queryParam, setQueryParam] = useState();
  const [objectID, setObjectID] = useState();
  const [passedval, setPassedval] = useState()

  useEffect(() => {
    // location.state.detail
    //   ? setPassedval(location.state.detail)
    //   : setPassedval({name:"ram"});
    // // passdata = location.state.passdata;
    console.log("printinlocationdetail", props);
    //setObjectID(location.state.detail)
    // axios
    // .get(`https://v5.vbb.transport.rest/locations?query=${queryParam}`)
    // .then((res) => {
    //   setObject(res.data);
    //   console.log(Object)
    // })
    // .catch((error) => {
    //   console.log("hello from stopInfo axios error");
    // });
  });

  console.log("from props dataa .....", passdata);
  return (
    <div className="bg-light table_bg">
      <div>{objectID}</div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Stops name </th>
            <th scope="col">Departure time </th>
          </tr>
        </thead>
        <tbody>
          {JSONDATA.map((data) => (
            <tr key={data.id}>
              <th scope="row">{data.name}</th>
              <td>XXXXXXXXX</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const JSONDATA = [
  {
    type: "stop",
    id: "900000100003",
    name: "Blexanderplatz",
    location: {
      type: "location",
      id: "900100003",
      latitude: 52.521508,
      longitude: 13.411267,
    },
    products: {
      suburban: true,
      subway: false,
      tram: false,
    },
  },
];
