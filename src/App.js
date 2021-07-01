//import logo from './logo.svg';
import "./App.css";
// import Signup from "./Signup";
import { Container } from "react-bootstrap";
// import AuthProvider from "../contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./components/dashboard";
import Path from "./components/StopInfo";

function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Router>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/stopInfo" component={Path} />
            {/*
              <Route path="/forgot-password" component={ForgotPassword} /> */}
          </Switch>
        </Router>
      </div>
    </Container>
  );
}

export default App;
