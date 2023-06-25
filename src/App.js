import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import React from "react";
import "./index.css";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";
import Register from "./Pages/Register/Register";

function App() {
  return (
    <>
      <Router>
          <Routes>
            <Route path="/login" element={<Login/>}> </Route>
            <Route path="/" element={<Home/>}> </Route>
            <Route path="/register" element={<Register/>}> </Route>
          </Routes>
        </Router>
    </>
  );
}

export default App;
