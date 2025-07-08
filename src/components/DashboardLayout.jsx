import React from "react";
import { Link } from "react-router-dom";
import "./DashboardLayout.css"; // 👉 optional for your custom styles

export default function DashboardLayout({ children }) {
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="logo">WeddingApp</h2>
        <nav className="nav-links">
          <Link to="/dashboard">🏠 Dashboard</Link>
          <Link to="/events">📅 Events</Link>
          <Link to="/guests">👥 Guests</Link>
          <Link to="/settings">⚙️ Settings</Link>
          <Link to="/">🚪 Logout</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="main-content">
        <header className="topbar">
          <h1>Welcome Back 👋</h1>
        </header>

        <div className="page-content">
          {children} {/* ✅ Each dashboard page will show up here */}
        </div>
      </div>
    </div>
  );
}
