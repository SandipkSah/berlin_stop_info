import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./components/dashboard";
import Favinfo from "./components/favStopInfo";
import Navbar from "./components/navbar";
import  stopDepartures from "./components/stopDeparturedetail.js";

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Switch>
          <Route path="/favInfo" component={Favinfo} />
          <Route path="/stopDepartures" component={stopDepartures} />
          <Route path="/" component={Dashboard} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
