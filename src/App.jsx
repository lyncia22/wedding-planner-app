import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";

import Navbar from "./components/navbar";
import DashboardNavbar from "./components/DashboardNavbar";
import Onboarding from "./onboarding/onboarding";
import Dashboard from "./dashboard/dashboard";
import Login from "./login/login";
import SignUp from "./signup/signup";
import VendorProfile from "./VendorProfile/VendorProfile";
import "./App.css";

function AppContent({ isLoggedIn, setIsLoggedIn }) {
  const location = useLocation();
  const isPublicPage = ["/", "/login", "/signup"].includes(location.pathname);

  return (
    <>
      {isPublicPage ? <Navbar /> : isLoggedIn && <DashboardNavbar />}

      <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route
          path="/dashboard"
          element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" replace />}
        />
        <Route
          path="/login"
          element={<Login onLogin={() => setIsLoggedIn(true)} />}
        />
        <Route
          path="/signup"
          element={<SignUp onSignUp={() => setIsLoggedIn(true)} />}
        />
        <Route path="/vendors/:vendorSlug" element={<VendorProfile />} />
      </Routes>
    </>
  );
}

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="*" element={<AppContent isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
      </Routes>
    </Router>
  );
}