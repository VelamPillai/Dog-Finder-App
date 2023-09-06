import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import { getDogs } from "./data/data.js";

import Home from "./routes/Home";
import Dogs from "./routes/Dogs";
import Dog from "./components/Dog";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Dogs />} />
          <Route path="dogs" element={<Dogs />}>
            <Route path=":dogName" element={<Dog />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
