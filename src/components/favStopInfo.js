import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { IoIosHeart } from "react-icons/io";

export default function FavInfo(props) {
  const history = useHistory();
  const [stopsList, setstopsList] = useState([]);

  const removeFavStatus = (data) => {
    const { id } = data;
    // console.log("gggkkkkkkkkkkk",id);
    var favStops = [];
    favStops = JSON.parse(localStorage.getItem("localFavIDArr")) || [];
    // console.log("favxa,", favStops.includes(data));
    // console.log("deleteddddddddddddd", favStops.indexOf(data));
    favStops.splice(favStops.indexOf(data), 1);
    localStorage.setItem("localFavIDArr", JSON.stringify(favStops));
    favStops = JSON.parse(localStorage.getItem("localFavIDArr")) || [];
    // console.log("gggggggggg", favStops);
    setstopsList(favStops);
  };

  const toggleFavStatus = (data) => {
    const { id } = data;
    var stopArrayid = [];
    stopArrayid = JSON.parse(localStorage.getItem("localFavArr")) || [];
    console.log("favxa,", stopArrayid.includes(id));
    stopArrayid.splice(stopArrayid.indexOf(id), 1);
  };

  useEffect(() => {
    var stopArray = JSON.parse(localStorage.getItem("localFavIDArr"));
    // console.log("-_)+++++++++++++",stopArray)
    var a = [];
    a = JSON.parse(localStorage.getItem("localFavArr"));
    // console.log("ffffffffffffffffffff", JSON.parse(localStorage.getItem("localFavIDArr")) || []);
    setstopsList(a);
  }, []);

  return (
    <div className="col-auto">
      <table className="table">
        {!(Array.isArray(stopsList) && stopsList.length) ? (
          <div className="container">
            <h1 className="alert alert-primary text-center">
              No Stops added as Favourite
            </h1>
          </div>
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
                <IoIosHeart
                  className="fav-button"
                  onClick={(e) => {
                    removeFavStatus(data);
                    toggleFavStatus(data);
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
