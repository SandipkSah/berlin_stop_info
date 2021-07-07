import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, Link, useHistory } from "react-router-dom";
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";

export default function StopInfo(props) {
  const history = useHistory();
  const [stopsList, setstopsList] = useState([]);
  const [favStopsid, setFavStopsid] = useState([])
  const [favStopsList, setFavStopsList]=useState([])
  

  const changeFavStatus = (data) => {
    const {id} = data
    console.log(id);
    console.log("favxa,", favStopsid.includes(id) );
    if (!favStopsid.includes(id)) {
      favStopsid.push(id)
      // const storageFavStops = {id: data}
      localStorage.setItem(id,data)
      console.log(localStorage)
      // console.log(storageFavStops)
      console.log("--------array", favStopsid)
      console.log("addinnggggggggggggg")
    }else{
      console.log("............",favStopsid.indexOf(id))
      favStopsid.splice(favStopsid.indexOf(id), 1)
      console.log("--------array", favStopsid)
      console.log("removinggggggggggggggggg")
    }
  };

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
                {favStopsid.includes(data.id)  ? (
                  <IoIosHeart
                    className="fav-button"
                    onClick={e => changeFavStatus(data)}
                  />
                ) : (
                  <IoIosHeartEmpty
                    className="fav-button"
                    onClick={e => changeFavStatus(data)}
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
