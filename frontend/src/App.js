import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./styles/App.css";
import Balance from "./components/Balance";
import Form from "./components/Form";
import Movements from "./components/Movements";
import Edit_Movement from "./components/Edit_Movement";

function App() {
  return (
    <div className="App">
      <Balance />
      <Movements />
        {/* <Router>
            <Route exact path="/" component={App} />
            <Route path="/Edit_Movement" component={Edit_Movement} />
        </Router> */}
      <Form />
    </div>
  );
}

export default App;