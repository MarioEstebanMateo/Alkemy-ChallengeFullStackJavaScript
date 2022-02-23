import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/App.css";

import Edit_Movement from "./components/Edit_Movement";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route exact path='/edit/:id' element={<Edit_Movement />}></Route>
          </Routes>
        </Router>
    </div>
  );
}

export default App;