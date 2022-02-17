import React, { Component } from "react";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Form from "./components/Form";
import Movements from "./components/Movements";

function App() {
  return (
    <div className="App">
      <Form />;
      <Movements />
    </div>
  );
}

export default App;