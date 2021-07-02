import axios from "axios";
// import { Form, Button, Card } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";

export default function StopInfo() {
  const location = useLocation();

  const [queryParam, setQueryParam] = useState();
  // const [objects, setObject] = useState();

  useEffect(() => {
    location.state.detail
      ? setQueryParam(location.state.de)
      : setQueryParam("a");
    //console.log("----------------",queryParam)
    axios
      // .get(`https://v5.vbb.transport.rest/locations?query=${queryParam}`)
      .get(
        `https://berlin-trasnportation-app.herokuapp.com/api/getlocation/${queryParam}`
      )
      .then((res) => {
        res.data.map((data) => {
          if (JSONDATA.indexOf(data) !== -1) {
            console.log("Value exists!");
          } else {
            JSONDATA.push(data);
          }
        });
      })
      .catch((error) => {
        console.log("hello from stopInfo axios error");
        //console.log(queryParam)
      });
  });

  return (
    <div className="bg-light table_bg">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name </th>
            <th scope="col">Type </th>
            <th scope="col">Subway</th>
            <th scope="col">Suburban</th>
            <th scope="col">Tram</th>
          </tr>
        </thead>
        <tbody>
          {JSONDATA.map((data) => (
            <tr key={data.id}>
              <th scope="row">
                <Link to="/stopDepartures" query={{ the: 'query' }}>
                  {data.name}
                </Link>
              </th>
              <td>{data.type}</td>
              <td>{data.products.suburban ? "Available" : "Not Available"}</td>
              <td>{data.products.subway ? "Available" : "Not Available"}</td>
              <td>{data.products.tram ? "Available" : "Not Available"}</td>
            </tr>
          ))}
          {/* {JSONDATA = []} */}
        </tbody>
      </table>
    </div>
  );
}

let JSONDATA = [
  // {
  //   type: "stop",
  //   id: "900000100003",
  //   name: "Alexanderplatz",
  //   location: {
  //     type: "location",
  //     id: "900100003",
  //     latitude: 52.521508,
  //     longitude: 13.411267,
  //   },
  //   products: {
  //     suburban: true,
  //     subway: false,
  //     tram: false,
  //   },
  // }
];
