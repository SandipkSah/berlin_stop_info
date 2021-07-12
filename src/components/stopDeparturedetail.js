import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function Stopdepartures() {
  const location = useLocation();
  // const passdata = {};

  const [departList, setDepartList] = useState([]);
  console.log(
    "from props dataa .....",
    location.state.detail[0],
    location.state.detail[1]
  );

  useEffect(() => {
    axios
      .get(
        `https://berlin-trasnportation-app.herokuapp.com/api/stopdepartures/${location.state.detail[0]}`
      )
      .then((res) => {
        // console.log("------------------------data from get request", res.data);
        setDepartList(res.data);
      })
      .catch((error) => {
        // console.log("....................");
      });
  }, []);
  return (
    <div>
      <h2 className="m-auto text-primary text-center">{location.state.detail[1]}</h2>
      <div className="bg-light table_bg m-auto">
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
                <td>{data.plannedWhen.substring(11, 16)}</td>
                <td>{data.direction}</td>
                <th scope="row">{data.stop.name}</th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
