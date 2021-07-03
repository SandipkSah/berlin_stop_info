const JSONDATA = [
    {
      type: "stop",
      id: "900000100003",
      name: "Blexanderplatz",
      location: {
        type: "location",
        id: "900100003",
        latitude: 52.521508,
        longitude: 13.411267,
      },
      products: {
        suburban: true,
        subway: false,
        tram: false,
      },
    },
  ];

 // .get(`https://v5.vbb.transport.rest/locations?query=${queryParam}`)

 location.state.detail
 ? setQueryParam(location.state.de)
 : setQueryParam("a");
//console.log("----------------",queryParam)
axios
 // .get(`https://v5.vbb.transport.rest/locations?query=${queryParam}`)
 .get(
   `https://berlin-trasnportation-app.herokuapp.com/api/getlocation/${queryParam}`
 )
 .then((res) => {
   res.data.map((data) => {
     if (JSONDATA.indexOf(data) !== -1) {
       console.log("Value exists!");
     } else {
       JSONDATA.push(data);
     }
   });
 })
 .catch((error) => {
   console.log("hello from stopInfo axios error");
   //console.log(queryParam)
 });
