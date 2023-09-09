import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Todo from "./components/Todo";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <Router>
      <div style={{ width: "90vw", height: "100vh", padding: "20px" }}>
        <Header />

        <div style={{ width: "100vw", height: "cal(100% - 50px)" }}>
          <Routes>
            <Route exact path="/" element={<Home />} />

            <Route exact path="/todo" element={<Todo />} />

            <Route exact path="/register" element={<Register />} />

            <Route exact path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
