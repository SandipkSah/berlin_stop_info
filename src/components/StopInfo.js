import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, Link, useHistory } from "react-router-dom";

export default function StopInfo(props) {
  const history = useHistory();
  // const location = useLocation();
  // const queryParam =
  //   location.state.detail === undefined ? "airport" : location.state.detail;
  // console.log("----------", queryParam);
  const [stopsList, setstopsList] = useState([]);
  
// console.log("----------",props)

  
  useEffect(() => {
    axios
      .get(
        `https://berlin-trasnportation-app.herokuapp.com/api/getlocation/${props.searchParam}`
      )
      .then((res) => {
        setstopsList(res.data);
        // console.log(stopsList);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <div className="col-auto">
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
          {stopsList.map((data) => (
            <tr key={data.id}>
              <th scope="row">
                <a className="stop_name"
                  onClick={(e) => {
                    e.preventDefault();
                    history.push({
                      pathname: "/stopDepartures",
                      state: { detail: data.id },
                    });
                  }}
                >
                  {data.name}
                </a>
              </th>
              <td>{data.type}</td>
              <td>{data.products.suburban ? "Available" : "Not Available"}</td>
              <td>{data.products.subway ? "Available" : "Not Available"}</td>
              <td>{data.products.tram ? "Available" : "Not Available"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
