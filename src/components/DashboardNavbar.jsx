 import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHandsHelping } from "react-icons/fa";
import "./navbar.css";

export default function DashboardNavbar() {
  const location = useLocation();

  const navLinks = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Budget Tracker", path: "/dashboard/budget" },
    { name: "Checklist", path: "/dashboard/checklist" },
    { name: "Vendors", path: "/dashboard/vendors" },
    { name: "Settings", path: "/dashboard/settings" },
  ];

  return (
    <nav className="navbar">
      <div className="logo">Wedding Bliss</div>

      <ul className="nav-links">
        {navLinks.map((link) => (
          <li
            key={link.path}
            className={location.pathname === link.path ? "active" : ""}
          >
            <Link to={link.path}>{link.name}</Link>
          </li>
        ))}

        <li>
          <button className="help-btn">
            <FaHandsHelping style={{ marginRight: "6px" }} />
            I can help
          </button>
        </li>
      </ul>
    </nav>
  );
}
