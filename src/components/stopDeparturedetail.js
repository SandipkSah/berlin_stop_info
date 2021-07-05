import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function Stopdepartures() {
  const location = useLocation();
  // const passdata = {};

  const [departList, setDepartList] = useState([]);
  // console.log("from props dataa .....", location.state.detail);

  useEffect(() => {
    axios
      .get(
        `https://berlin-trasnportation-app.herokuapp.com/api/stopdepartures/${location.state.detail}`
      )
      .then((res) => {
        console.log("------------------------data from get request", res.data);
        setDepartList(res.data);
      })
      .catch((error) => {
        console.log("....................");
      });
  });
  return (
    <div className="bg-light table_bg">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Departure time </th>
            <th scope="col">In the direction </th>
            <th scope="col">Destination </th>
          </tr>
        </thead>
        <tbody>
          {departList.map((data) => (
            <tr key={data.id}>
              <td>{data.plannedWhen.substring(11, 19)}</td>
              <td>{data.direction}</td>
              <th scope="row">{data.stop.name}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
