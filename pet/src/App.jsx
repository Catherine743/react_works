import React from "react";
import { Routes, Route } from "react-router-dom";
import Pet from "./Pet";
import Add from "./Add";
import Edit from "./Edit";
import Header from "./Header";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Pet />} />
        <Route path="/add" element={<Add />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </>
  );
}

export default App;
