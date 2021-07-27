import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { IoIosHeart } from "react-icons/io";

export default function FavInfo(props) {
  const history = useHistory();
  const [favStopsList, setfavStopsList] = useState([]);

  const toggleFavStatus = (data) => {
    var stopArray = [];
    stopArray = JSON.parse(localStorage.getItem("favArr")) || [];
    //gets data from localStorage and stores in favStopsList 
    stopArray.splice(stopArray.indexOf(data), 1);
    //removes a data from favStopsList 
    localStorage.setItem("favArr", JSON.stringify(stopArray));
    // sets modified favStopsList to localStorage 
    setfavStopsList(stopArray);
  };

  useEffect(() => {
    setfavStopsList(JSON.parse(localStorage.getItem("favArr")));
  }, []);

  return (
    <div className="col-auto">
      <table className="table">
        {!(Array.isArray(favStopsList) && favStopsList.length) ? (
          <div className="container">
            <h1 className="alert alert-primary text-center">
              No Stops added as Favourite
              {/* in case of no object as Favourite stops */}
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
          {favStopsList.map((data) => (
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
                    //removeFavStatus(data);
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
