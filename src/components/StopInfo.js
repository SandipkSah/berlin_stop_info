import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";

export default function StopInfo(props) {
  const history = useHistory();
  const [stopsList, setstopsList] = useState([]);
  const [favIDList, setFavIDList] = useState();
  const [invoke, setInvoke] = useState(false);

  function saveDataToLocalStorage(data) {
    const tempData = {
      id: data.id,
      name: data.name,
      type: data.type,
      products: data.products,
    };
    var stopArray = [];
    stopArray = JSON.parse(localStorage.getItem("favArr")) || [];
    //console.log(stopArray.includes(tempData));
    console.log("entering from add data>>>>>>>>>>");
    stopArray.push(tempData);
    localStorage.setItem("favArr", JSON.stringify(stopArray));
    stopArray = JSON.parse(localStorage.getItem("favArr"));
    //console.log(":::::::::::::::", stopArray);
  }

  function removeDataFromLocalStorage(data) {
    const tempData = {
      id: data.id,
      name: data.name,
      type: data.type,
      products: data.products,
    };
    var stopArray = [];
    stopArray = JSON.parse(localStorage.getItem("favArr")) || [];
    console.log("entering from remove data>>");
    stopArray.splice(stopArray.indexOf(tempData), 1);
    localStorage.setItem("favArr", JSON.stringify(stopArray));
    stopArray = JSON.parse(localStorage.getItem("favArr")) || [];
    //console.log(":::::::::::::::", stopArray);
  }

  const toggleFavStatus = (data) => {
    const { id } = data;
    //var favStopIDArray = favIDList || [];
    var favStopIDArray = favIDList;
    if (!favStopIDArray.includes(id)) {
      console.log(
        "iinserting into array of id",
        favStopIDArray,
        " adding id is ",
        data.id
      );
      console.log("adding an id in array  from the data---", data);
      favStopIDArray.push(id);
      setFavIDList(favStopIDArray);
      console.log("after adding the array is ", favStopIDArray);
      saveDataToLocalStorage(data);
    } else {
      console.log(
        "removing from array of id",
        favStopIDArray,
        " removing id is ",
        data.id
      );
      console.log("removing an id from array", data);
      favStopIDArray.splice(favStopIDArray.indexOf(id), 1);
      console.log("after removing the array is ", favStopIDArray);
      setFavIDList(favStopIDArray);
      removeDataFromLocalStorage(data);
    }
    setInvoke(!invoke);
    // var forRerun = stopsList;
    // setstopsList(forRerun);
    //localStorage.setItem("localFavIDArr", JSON.stringify(favStopIDArray));
  };

  useEffect(() => {
    const favArr = JSON.parse(localStorage.getItem("favArr")) || [];
    var favArrID = [];
    favArr.map((eachFavdata) => {
      favArrID.push(eachFavdata.id);
    });
    setFavIDList(favArrID);
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
  }, [invoke,props.searchParam]);

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
                {/* {console.log("from the jsx component each data are", data)} */}
                {console.log(false || favIDList?.includes(data.id))}
                {favIDList.includes(data.id) ? (
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
