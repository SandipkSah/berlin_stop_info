import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";

export default function StopInfo(props) {
  const history = useHistory();
  const [stopsList, setstopsList] = useState([]);
  const [favStopsid, setFavStopsid] = useState([]);

  function saveDataToLocalStorage(data) {
    var stopArray = [];
    stopArray = JSON.parse(localStorage.getItem("localFavArr")) || [];
    console.log(stopArray.includes(data));
    if (!stopArray.includes(data)) {
      console.log("entering from add data>>>>>>>>>>");
      stopArray.push(data);
      localStorage.setItem("localFavArr", JSON.stringify(stopArray));
    }
    stopArray = JSON.parse(localStorage.getItem("localFavArr"));
    console.log(":::::::::::::::", stopArray);
  }

  function removeDataToLocalStorage(data) {
    var stopArray = [];
    stopArray = JSON.parse(localStorage.getItem("localFavArr")) || [];
    if (stopArray.includes(data)) {
      console.log("entering from remove data>>");
      stopArray.splice(stopArray.indexOf(data), 1);
      localStorage.setItem("localFavArr", JSON.stringify(stopArray));
    }
    stopArray = JSON.parse(localStorage.getItem("localFavArr")) || [];
    console.log(stopArray);
  }

  const toggleFavStatus = (data) => {
    const { id } = data;
    var stopArrayid = [];
    stopArrayid = JSON.parse(localStorage.getItem("localFavIDArr")) || [];
    console.log("favxa,", stopArrayid.includes(id));
    console.log("lllllll------", stopArrayid);
    if (!stopArrayid.includes(id)) {
      console.log("entering again............");
      stopArrayid.push(id);
      saveDataToLocalStorage(data);
    } else {
      stopArrayid.splice(stopArrayid.indexOf(id), 1);
      removeDataToLocalStorage(data);
    }
    localStorage.setItem("localFavIDArr", JSON.stringify(stopArrayid));
    
  };

  useEffect(() => {
    // setFavStopsid(JSON.parse(localStorage.getItem("favstopcomp")))
    setFavStopsid(JSON.parse(localStorage.getItem("localFavIDArr")));
    axios
      .get(
        `https://berlin-trasnportation-app.herokuapp.com/api/getlocation/${props.searchParam}`
      )
      .then((res) => {
        setstopsList(res.data);
      })
      .catch((error) => {
        console.log("something is definitely wrong");
      });
  });

  return (
    <div className="col-auto">
      <table className="table">
        {!(Array.isArray(stopsList) && stopsList.length) ? (
          <h1 className="alert alert-primary m-auto">
            It seems like there is some issue <br /> try checking your internet
          </h1>
        ) : (
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
        )}
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
                      state: { detail: [data.id, data.name] },
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
                {favStopsid?.includes(data.id) ? (
                  <IoIosHeart
                    className="fav-button"
                    onClick={(e) => toggleFavStatus(data)}
                  />
                ) : (
                  <IoIosHeartEmpty
                    className="fav-button"
                    onClick={(e) => {
                      toggleFavStatus(data);
                    }}
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
