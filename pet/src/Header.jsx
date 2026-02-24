import React from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {

  const location = useLocation();  // 👈 get current path

  return (
    <div className="bg-dark p-3 text-white d-flex justify-content-between">
      <h4>Pet Care Manager</h4>

      <div>
        {/* ✅ Show Home link only if NOT on "/" */}
        {location.pathname !== "/" && (
          <Link to="/" className="text-white me-3">
            Home
          </Link>
        )}

        <Link to="/add" className="text-white me-3">
          Add Pet
        </Link>
      </div>
    </div>
  );
}

export default Header;