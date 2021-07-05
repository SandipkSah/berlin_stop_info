//import logo from './logo.svg';
import "./App.css";
// import Signup from "./Signup";
import { Container } from "react-bootstrap";
// import AuthProvider from "../contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./components/dashboard";



function App() {
  return (
    <>
       
       <Dashboard/>
       {/* <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      > 
       <div className="w-100" style={{ maxWidth: "400px" }}> 
       <Router>
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route path="/stopInfo" component={stopInfo} />
              <Route path="/stopDepartures" component={stopDepartures} />
              
              {/* <Route path="/forgot-password" component={ForgotPassword} />  */}
       {/* </Switch>
          </Router> 
       </div> 
       </Container>   */}
    </>
  );
}

export default App;
