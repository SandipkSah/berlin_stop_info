import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function StopInfo() {
  const location = useLocation();

  const [objectId, setObjectId] = useState();
  const [Object, setObject] = useState();

  useEffect(() => {
    axios
      .get(`https://v5.vbb.transport.rest/stations/${objectId}`)
      .then((res) => {
        setObject(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  
  console.log("from Stop info details are .....", location.state.detail);
  return (
    <div className="bg-light table_bg">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Availability of</th>
            <th scope="col">Subway</th>
            <th scope="col">Suburban</th>
            <th scope="col">Tram</th>
          </tr>
        </thead>
        <tbody>
          {JSONDATA.map((data) => (
            <tr>
              <th scope="row">{data.name}</th>
              <td>{data.name}</td>
              <td>{data.name}</td>
              <td>{data.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const JSONDATA = [
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
  // },
  // {
  //   type: "stop",
  //   id: "900000100003",
  //   name: "Blexanderplatz",
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
  // },
  // {
  //   type: "stop",
  //   id: "900000100003",
  //   name: "Clexanderplatz",
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
  // },
];

// const data = [{}];

// JSONDATA.map((data) => {
//   data.push({ value: data.name, label: data.name });
// });

// const columns = [
//   {
//     title: "Stop Name",
//     dataIndex: "Stop Name",
//     key: "Stop Name",
//     width: 100,
//   },
//   {
//     title: "sub urban",
//     dataIndex: "sub urban",
//     key: "sub urban",
//     width: 100,
//   },
//   {
//     title: "subway",
//     dataIndex: "subway",
//     key: "subway",
//     width: 200,
//   },
//   {
//     title: "tram",
//     dataIndex: "tram",
//     key: "tram",
//     width: 100,
//   },
// ];
