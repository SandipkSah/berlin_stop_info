import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, Link, useHistory } from "react-router-dom";
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";

export default function StopInfo(props) {
  const history = useHistory();
  // const location = useLocation();
  // const queryParam =
  //   location.state.detail === undefined ? "airport" : location.state.detail;
  // console.log("----------", queryParam);

  const changeFavStatus = (data) => {
    const {id} = data
    console.log(id);
    // console.log("favxa,", favStopsid.includes(id) );
    if (true) {
      // favStopsid.push(id)
      // const storageFavStops = {id: data}
      // localStorage.setItem(id,data)
      console.log(localStorage)
      // console.log(storageFavStops)
      // console.log("--------array", favStopsid)
      console.log("addinnggggggggggggg")
    }else{
      // console.log("............",favStopsid.indexOf(id))
      // favStopsid.splice(favStopsid.indexOf(id), 1)
      // console.log("--------array", favStopsid)
      console.log("removinggggggggggggggggg")
    }
  };


  const [stopsList, setstopsList] = useState([]);

  useEffect(() => {
    axios
      .get(`https://berlin-trasnportation-app.herokuapp.com/api/getlocation/s`)
      .then((res) => {
        setstopsList(res.data);
        // console.log(stopsList);
        // console.log("..........for lokal", localStorage);
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
            <th scope="col">Fav</th>
          </tr>
        </thead>
        <tbody>
          {stopsList.map((data) => (
            <tr key={data.id}>
              <th scope="row">
                <a
                  className="stop_name"
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
              <td>{data?.type}</td>
              <td>{data?.products.subway ? "Available" : "Not Available"}</td>
              <td>{data?.products.suburban ? "Available" : "Not Available"}</td>
              <td>{data?.products.tram ? "Available" : "Not Available"}</td>
              <td>
                {true ? (
                  <IoIosHeart
                    className="fav-button"
                    onClick={(e) => changeFavStatus(data)}
                  />
                ) : (
                  <IoIosHeartEmpty
                    className="fav-button"
                    onClick={(e) => changeFavStatus(data)}
                  />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
