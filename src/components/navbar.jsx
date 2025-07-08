import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  const location = useLocation();

  const isOnboarding = location.pathname === "/";

  return (
    <nav className="navbar">
      <div className="logo">Wedding Bliss</div>
      <ul className="nav-links">
        {!isOnboarding ? (
          <>
            <li className={location.pathname === "/dashboard" ? "active" : ""}>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li className={location.pathname === "/login" ? "active" : ""}>
              <Link to="/login">Login</Link>
            </li>
          </>
        ) : (
          <>
             <li>
              <Link to="/signup">Sign Up</Link>
            </li>
            <li>
              <Link to="/login" className="button login-btn">
                Login
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
