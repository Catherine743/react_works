import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="bg-dark p-3 text-white d-flex justify-content-between">
      <h4>Pet Care Manager</h4>
      <div>
        <Link to="/" className="text-white me-3">Home</Link>
        <Link to="/add" className="text-white me-3">Add Pet</Link>
      </div>
    </div>
  );
}

export default Header;